import ErrorHandler from "../Middlewares/error.js";
import { portfolioModel } from "../Models/portfolioModel.js";
import { catchAsyncErrors } from "../utils/asyncHandler.js";
import { v2 as cloudinary } from "cloudinary";

const folderPath = `Swirl 365/Swirl Creations`

//   const project = await portfolioModel.findOneAndUpdate(
//     { name },
//     { $setOnInsert: { name, poster: { public_id: cloudinaryResponseForPoster.public_id, url: cloudinaryResponseForPoster.secure_url }, type, video } },
//     { new: true, upsert: true, includeResultMetadata: true, runValidators: true }
//   )


//   if (!project?.lastErrorObject?.upserted) {
//     return next(new ErrorHandler("Project Name Already Exist"), 409);
//   }

//   res.status(201).json({
//     success: true,
//     message: "Project Successfully Added!",
//     project: project.value
//   })



export const addVideo = catchAsyncErrors(async (req, res, next) => {
  const { name, type, video } = req.body;

  if (!name || !type || !video) {
    return next(new ErrorHandler("Please Fill All Fields", 400))
  }
  if (!req.files || Object.keys(req.files).length === 0) {
    return next(new ErrorHandler("Poster Must Required"));
  }

  let project = await portfolioModel.findOne({ name });
  if (project) {
    return next(new ErrorHandler("Project Name Already Exist"), 409);
  }

  const { poster } = req.files;
  const cloudinaryResponseForPoster = await cloudinary.uploader.upload(poster.tempFilePath, { folder: folderPath });
  if (!cloudinaryResponseForPoster || cloudinaryResponseForPoster.error) {
    return next(new ErrorHandler("Some Error Occured While Uploading Poster , Please Try Again Later!"));
  }

  project = await portfolioModel.create({ name, type, video, poster: { public_id: cloudinaryResponseForPoster.public_id, url: cloudinaryResponseForPoster.secure_url } });



  res.status(201).json({
    success: true,
    message: "Project Successfully Added!",
    project: project
  })

})


export const updateVideo = catchAsyncErrors(async (req, res, next) => {
  const { name, video, type, featured } = req.body || {};
  const { id } = req.params;



  const project = await portfolioModel.findOne({ _id: id });

  if (!project) return next(new ErrorHandler("Project Not Exist In Database", 404))


  const updatedProject = {};
  if (name && name !== project.name) updatedProject.name = name;
  if (video && video !== project.video) updatedProject.video = video;
  if (type && type !== project.type) updatedProject.type = type;
  if (featured !== project.featured) updatedProject.featured = featured;

  if (Object.keys(updatedProject).length === 0 && !req.files?.poster) {
    return next(new ErrorHandler("Please Do Some Changes To Update", 400))
  }

  if (req.files?.poster) {
    const { poster } = req.files;
    try {
      await cloudinary.uploader.destroy(project.poster.public_id);

    } catch (error) {
      return next(new ErrorHandler(`Failed To Delete Previous Image : ${error}`, 400))
    }
    const cloudinaryResponseForAvatar = await cloudinary.uploader.upload(
      poster.tempFilePath,
      { folder: folderPath }
    )
    updatedProject.poster = {
      public_id: cloudinaryResponseForAvatar.public_id,
      url: cloudinaryResponseForAvatar.secure_url
    }

  }



  let FinalUpdatedProject = await portfolioModel.findByIdAndUpdate(id, updatedProject, { new: true, runValidators: true });


  res.status(200).json({
    success: true,
    message: "Project Updated Successfully!",
    FinalUpdatedProject
  })


})

export const getPortfolio = catchAsyncErrors(async (req, res, next) => {

  const { skip = 0, limit = 20 } = req.query;
  const Portfolio = await portfolioModel.find({}).skip(Number(skip)).limit(Number(limit));

  res.status(200).json({
    success: true,
    Portfolio
  })

})

export const getFeaturedProjects = catchAsyncErrors(async (req, res, next) => {

  let projects = await portfolioModel.find({ featured: true }).limit(24)

  res.status(200).json({
    success: true,
    projects
  })

})

export const getCollection = catchAsyncErrors(async (req, res, next) => {
  const { type } = req.params;


  if (!type) {
    return res.status(400).json({
      success: false,
      message: "Type is required",
    });
  }
  let Formatted = type.replace(/-/g, " ");

  //  const searchType = type.toLowerCase();
  const projects = await portfolioModel.find({ type: { $regex: new RegExp(`^${Formatted}$`), $options: "i" } });

  if (!projects || projects.length === 0) {

    return next(new ErrorHandler("No Projects Found", 200))
  }
  console.log(Formatted)

  return res.status(200).json({
    success: true,
    projects,
  });
})

export const deleteVideo = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  if (!id) return next(new ErrorHandler("ID not found", 403))
  let project = await portfolioModel.findById({ _id: id });
  if (!project) return next(new ErrorHandler("Project Not Found", 404));

  try {
    await cloudinary.uploader.destroy(project.poster.public_id)
  } catch (error) {
    return next(new ErrorHandler(`Failed To Delete Project : ${error}`, 400))
  }

  project = await project.deleteOne();

  res.status(200).json({
    success: true,
    message: "Project Deleted Successfully"
  })
})
