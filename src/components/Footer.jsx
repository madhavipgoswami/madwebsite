const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {currentYear} Madhavi Goswami, CFA. All rights reserved.</p>
          <p>Built with React and deployed on Vercel</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
