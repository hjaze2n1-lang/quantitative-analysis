export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap footer-inner">
        <div>© {year} براهين للتحليل الكمي</div>
        <div className="footer-links">
          <a href="#">الشروط</a>
          <a href="#">المخاطر</a>
          <a href="#">تواصل معنا</a>
        </div>
      </div>
    </footer>
  );
}
