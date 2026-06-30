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

  // Hero
  setText('hero-title', c.hero_title);
  setText('hero-lead', c.hero_lead);

  // Home — intro section
  setText('intro-lead', c.intro_lead);
  setText('intro-body', c.intro_body);

  // Home — service cards
  setText('svc1-card-desc', c.svc1_card_desc);
  setText('svc2-card-desc', c.svc2_card_desc);
  setText('svc3-card-desc', c.svc3_card_desc);

  // Home — method section
  setText('method-p1', c.method_p1);
  setText('method-p2', c.method_p2);

  // Home — quote + CTA
  setText('quote-text', c.quote);
  setText('cta-title', c.cta_title);
  setText('cta-lead', c.cta_lead);

  // About page
  setText('about-p1', c.about_p1);
  setText('about-p2', c.about_p2);
  setText('about-p3', c.about_p3);
  setText('about-b1', c.about_b1);
  setText('about-b2', c.about_b2);
  setText('about-b3', c.about_b3);
  setText('about-b4', c.about_b4);
  setText('about-p4', c.about_p4);
  setText('about-method-desc', c.about_method_desc);
  setText('about-closing', c.about_closing);

  // Services page
  setText('svc-intro-lead', c.svc_intro_lead);
  setText('s1-desc-p1', c.s1_desc_p1);
  setText('s1-desc-p2', c.s1_desc_p2);
  setText('s2-desc-p1', c.s2_desc_p1);
  setText('s2-desc-p2', c.s2_desc_p2);
  setText('s3-desc', c.s3_desc);
  setText('svc-cta-title', c.svc_cta_title);
  setText('svc-cta-lead', c.svc_cta_lead);

  // Ghid page
  setText('ghid-lead', c.ghid_lead);
  setText('ghid-content-intro', c.ghid_content_intro);

  // Contact page
  setText('contact-lead', c.contact_lead);
  setText('contact-info', c.contact_info);

  // Images
  setImg('hero-img', c.hero_img);
  setImg('about-img', c.about_img);
  setImg('method-img', c.method_img);
  setImg('ghid-img', c.ghid_img);

  // Prices
  setText('price-s1', c.s1_price);
  setText('price-s2', c.s2_price);
  setText('price-s3', c.s3_price);
  setText('price-s1-full', c.s1_price_full);
  setText('price-s2-basic', c.s2_price_basic);
  setText('price-s2-plus', c.s2_price_plus);
  setText('price-s4', c.s4_price);
  setText('price-ghid', c.ghid_price);
  setText('price-ghid-strike', c.ghid_price_strike);

  // Contact info
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
  if (c.booking_url) {
    document.querySelectorAll('a[data-book]').forEach(function (a) {
      a.href = c.booking_url;
      a.target = '_blank';
      a.rel = 'noopener';
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
