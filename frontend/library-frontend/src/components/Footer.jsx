import './Footer.css'


function Footer () {
    return (
        <>
        
        <footer className='footer'>
            <div className='columns'>
                <div className='footer-column'>
                    <h1 className='column-title'>Library</h1>
                    <ul className='column-list'>
                        <li><a href="/">Pricing</a></li>
                         <li><a href="/">Updates</a></li>
                         <li><a href="/">Beta</a></li>
                         <li><a href="/">Newsletter</a></li>
                         <li><a href="/">Collaborations</a></li>
                    </ul>
                </div>
                <div className='footer-column'>
                    <h1 className='column-title'>Product</h1>
                    <ul className='column-list'>
                        <li><a href="/">Business</a></li>
                        <li><a href="/">Designers</a></li>
                        <li><a href="/">Classrooms</a></li>
                        <li><a href="/">Newcomers</a></li>
                    </ul>
                </div>
                <div className='footer-column'>
                    <h1 className='column-title'>Learning</h1>
                    <ul className='column-list'>
                        <li><a href="/">Learn Hub</a></li>
                        <li><a href="/">Manuals</a></li>
                        <li><a href="/">Tutorials</a></li>
                        <li><a href="/">Communities</a></li>
                    </ul>
                </div>
                <div className='footer-column'>
                    <h1 className='column-title'>Ressources</h1>
                    <ul className='column-list'>
                        <li><a href="/">Tutorials</a></li>
                        <li><a href="/">Editorials</a></li>
                        <li><a href="/">Product</a></li>
                        <li><a href="/">Newsroom</a></li>
                    </ul>
                </div>
                <div className='footer-column'>
                    <h1 className='column-title'>About</h1>
                    <ul className='column-list'>
                        <li><a href="/">Company</a></li>
                        <li><a href="/">Careers</a></li>
                        <li><a href="/">Legal</a></li>
                        <li><a href="/">Help</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="footer-bottom">
                <div className="footer-logo">
                    <span>LIBRARY</span> 
                    </div>
                    
                    <p className="footer-copyright">
                        © 2025 Library. All rights reserved.
                    </p>
                    
            <div className="footer-socials">
                <a href="https://facebook.com" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="https://instagram.com" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="https://rss.com" aria-label="RSS Feed"><i className="fas fa-rss"></i></a>
            </div>
      </div>
    </footer>
    </>
    )
}

export default Footer