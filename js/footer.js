const createFooter = () => {
  let footer = document.querySelector("footer");

  footer.innerHTML = `
    <div class="footer-content">
    <img src="img/light-logo.png" class="logo" alt="" />
    <div class="footer-ul-container">
      <ul class="category">
        <li class="category-title">men</li>
        <li><a href="#" class="footer-link">t-shirts</a></li>
        <li><a href="#" class="footer-link">sweatshirts</a></li>
        <li><a href="#" class="footer-link">shirts</a></li>
        <li><a href="#" class="footer-link">jeans</a></li>
        <li><a href="#" class="footer-link">trousers</a></li>
        <li><a href="#" class="footer-link">sheos</a></li>
        <li><a href="#" class="footer-link">casuals</a></li>
        <li><a href="#" class="footer-link">formals</a></li>
        <li><a href="#" class="footer-link">sports</a></li>
        <li><a href="#" class="footer-link">watches</a></li>
      </ul>
      <ul class="category">
        <li class="category-title">women</li>
        <li><a href="#" class="footer-link">t-shirts</a></li>
        <li><a href="#" class="footer-link">sweatshirts</a></li>
        <li><a href="#" class="footer-link">shirts</a></li>
        <li><a href="#" class="footer-link">jeans</a></li>
        <li><a href="#" class="footer-link">trousers</a></li>
        <li><a href="#" class="footer-link">sheos</a></li>
        <li><a href="#" class="footer-link">casuals</a></li>
        <li><a href="#" class="footer-link">formals</a></li>
        <li><a href="#" class="footer-link">sports</a></li>
        <li><a href="#" class="footer-link">watches</a></li>
      </ul>
    </div>
  </div>
  <p class="footer-title">about company</p>
  <p class="info">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam doloribus
    labore ipsum quis? Magnam amet laboriosam eaque officiis, temporibus est
    aspernatur id, quasi accusantium nemo facilis eius! Aliquam molestiae
    necessitatibus sunt, numquam fuga qui, non quidem alias mollitia
    accusamus, vel officia omnis perspiciatis officiis. Maiores soluta
    repellendus exercitationem aliquid, quia at explicabo consequatur ullam
    nostrum mollitia, quasi delectus dolore dolorem eveniet doloremque
    cupiditate vero! Rerum, sunt? Nostrum tenetur iste cum culpa,
    laudantium, esse non nulla eveniet harum, deserunt dicta! Praesentium
    adipisci facilis doloribus incidunt illum? Dolore, repellat, ratione
    aliquid repudiandae optio fuga alias at ab soluta labore, ipsum ipsam.
    Ut?
  </p>
  <p class="info">
    support emails: help@Clothing.com, customersupport@Clothing.com
  </p>
  <p class="info">telephones: 0100 100 2569, 0122 100 2569</p>
  <div class="footer-social-container">
    <div>
      <a href="#" class="social-link">terms & services</a>
      <a href="#" class="social-link">privacy page</a>
    </div>
    <div>
      <a href="#" class="social-link">facebook</a>
      <a href="#" class="social-link">instagram</a>
      <a href="#" class="social-link">twitter</a>
    </div>
  </div>
  <p class="footer-credit">Clothing, Best apparels online Store</p>
    `;
};

createFooter();
