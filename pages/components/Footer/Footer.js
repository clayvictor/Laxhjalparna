export default function Footer() {
  return (
    <div className="container footer">
      <div className="flex">
        <div className="contact">
          <h3>NÅGRA FLER FRÅGOR? KONTAKTA OSS!</h3>
          <h2 className="mg-top-2">KONTAKTEMAIL</h2>
          <p>contact@tempmail.com</p>
          <h2 className="mg-top-2">KONTAKTNUMMER</h2>
          <p>+463176251748</p>
          <p>*Linjerna är öppna 9:00–18:00 måndag till fredag.</p>
        </div>
        <hr />
        <div>
          <h3>Följ oss på våra socialamedier!</h3>
          <div className="icons mg-top-2">
            <i className="mg-right-2 fa-6x fa-brands fa-instagram"></i>
            <i className="mg-right-2 fa-6x fa-brands fa-square-facebook"></i>
            <i className="mg-right-2 fa-6x fa-brands fa-tiktok"></i>
          </div>
        </div>
      </div>
    </div>
  );
}