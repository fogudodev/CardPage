import '../assets/styles/card.css'
import '../assets/styles/fonts.css'
import Header from '../assets/images/illustration-article.svg'
import Profile from '../assets/images/image-avatar.webp'

export default function Card() {
  return (
    <div className='card-container'>
        <section className='card-header'>
            <img src={Header} alt="Imagem de cabeçalho" />
        </section>

        <section className='card-content'>
            <div className='tag-card'>
                <span>learning</span>
            </div>

            <div className="publi-card">
                <p>Published, 21 Dec 2023</p>
            </div>

            <div className='title-card'>
                <h1>HTML & CSS Fundations</h1>
            </div>

            <div className="des-card">
                <p>These languages are the backbone of every website, defining structure, content, and presentation</p>
            </div>

            <div className="profile-card">
                <img src={Profile} alt="Avatar" />
                <span>Greg Hooper</span>
            </div>
        </section>
    </div>
  )
}
