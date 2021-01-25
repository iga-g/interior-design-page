new fullpage('#fullpage', {
  autoScrolling: true,
  navigation: true,
  onLeave: (origin, destination, direction) => {
    const section = destination.item
    const title = section.querySelector('h1');

    const tl = new TimelineMax({ delay: 0.5 });

    tl.fromTo(title, 0.5, { y: '20', opacity: 0 }, { y: 0, opacity: 1 })

    if (destination.index === 1) {
      const imgs = document.querySelectorAll('.about-img');
      const description = document.querySelector('.description');

      tl.fromTo(imgs, 0.7, { x: '200%' }, { x: '0%' })
        .fromTo(description, 0.5, { y: '50', opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(imgs[1], 0.7, { opacity: 0 }, { opacity: 1 });
    }

    else if (destination.index === 2) {
      const cards = document.querySelectorAll('.card');

      tl.fromTo(cards[0], 0.5, { opacity: 0 }, { opacity: 1 })
        .fromTo(cards[1], 0.5, { opacity: 0 }, { opacity: 1 })
        .fromTo(cards[2], 0.5, { opacity: 0 }, { opacity: 1 })
        .fromTo(cards[3], 0.5, { opacity: 0 }, { opacity: 1 });
    }

    else if (destination.index === 3) {
      const offers = document.querySelectorAll('.offers');

      tl.fromTo(offers, 0.5, { y: '50', opacity: 0 }, { y: 0, opacity: 1 });
    }

    else if (destination.index === 4) {
      const socials = document.querySelector('.social-links');

      tl.fromTo(socials, 0.5, { y: '50', opacity: 0 }, { y: 0, opacity: 1 });
    }
  }

});