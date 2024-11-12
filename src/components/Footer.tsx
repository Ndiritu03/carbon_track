const Footer = () => {
  return (
    <footer className="bg-green-600  ">
      <div className="p-3 text-white flex m-auto gap-2">
        <section className="flex items-center gap-1">
          <a href="https:facebook.com">
            <p>Facebook</p>
          </a>
        </section>
        <section className="flex items-center gap-1">
          <a href="https://instagram.com">
            <p>Instagram</p>
          </a>
        </section>
        <section className="flex items-center gap-1">
          <a href="https://telrgram.com">
            <p>Telegram</p>
          </a>
        </section>
        <section className="flex items-center gap-1">
          <a href="https://linked.com">
            <p>LinkedIn</p>
          </a>
        </section>
      </div>
    </footer>
  );
};
export default Footer;
