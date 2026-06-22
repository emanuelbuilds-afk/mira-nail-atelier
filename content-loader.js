(async function () {
  var c;
  try {
    var r = await fetch('content.json?_=' + Date.now());
    if (r.ok) c = await r.json();
  } catch (e) {}
  if (!c) return;

  function setText(id, val) {
    var el = document.getElementById(id);
    if (el && val !== undefined && val !== '') el.textContent = val;
  }
  function setImg(id, src) {
    var el = document.getElementById(id);
    if (el && src) el.src = src;
  }

  setText('hero-title', c.hero_title);
  setText('hero-lead', c.hero_lead);
  setText('quote-text', c.quote);
  setText('about-p1', c.about_p1);

  setImg('hero-img', c.hero_img);
  setImg('about-img', c.about_img);
  setImg('method-img', c.method_img);
  setImg('ghid-img', c.ghid_img);

  setText('price-s1', c.s1_price);
  setText('price-s2', c.s2_price);
  setText('price-s3', c.s3_price);
  setText('price-s1-full', c.s1_price_full);
  setText('price-s2-basic', c.s2_price_basic);
  setText('price-s2-plus', c.s2_price_plus);
  setText('price-s4', c.s4_price);
  setText('price-ghid', c.ghid_price);
  setText('price-ghid-strike', c.ghid_price_strike);
  setText('contact-phone', c.phone_display);
  setText('contact-email', c.email);

  if (c.phone) {
    document.querySelectorAll('a[href^="tel:"]').forEach(function (a) {
      a.href = 'tel:' + c.phone;
    });
  }
  if (c.email) {
    document.querySelectorAll('a[href^="mailto:"]').forEach(function (a) {
      a.href = 'mailto:' + c.email;
    });
  }
  if (c.facebook_url) {
    document.querySelectorAll('a[aria-label="Facebook"]').forEach(function (a) {
      a.href = c.facebook_url;
    });
  }
  if (c.instagram_url) {
    document.querySelectorAll('a[aria-label="Instagram"]').forEach(function (a) {
      a.href = c.instagram_url;
    });
  }
})();
