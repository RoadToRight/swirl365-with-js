"use client"
import Navlist from "../Navbar/Navlist"
import css from "../../styles/Navbar/NavBar.module.scss"



const Navbar = () => {


  return (

    <nav className={`${css.navbar} Navbar_Home`}>
      <header className={`${css.container_parent} container`}>
        <div className={css.logo}>
          <h2 className={css.animated_gradient_text}>
            {/* <img src="https://res.cloudinary.com/dp6b6emb9/image/upload/Swirl365_logo_dqv2zg.webp" alt="" width={150} 
              style={{ objectFit: 'contain' }} /> */}
            {/* <img className={"white_logo"} src="https://res.cloudinary.com/dp6b6emb9/image/upload/v1761881113/logo_white_swirl365_c2616p.webp" alt="" width={150}
              style={{ objectFit: 'contain' }} /> */}

                <img className={"black_logo"} src="https://res.cloudinary.com/dp6b6emb9/image/upload/v1759525483/Swirl365_logo_dqv2zg.webp" alt="" width={150}
              style={{ objectFit: 'contain' }} />
          </h2>
        </div>

        <Navlist />
      </header>
    </nav> 
 
  )
}

export default Navbar
