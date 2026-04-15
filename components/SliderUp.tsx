const ITEMS = [
  {
    kicker: "Transport Routier International",
    title: "Une équipe d'experts à votre écoute. Transport de tous types de produits avec une qualité de service constante, garantie du respect de votre image de marque.",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
  },
  {
    kicker: "Notre Flotte",
    title: "Semi-remorques frigorifiques KRONE et SCHMITZ. Tracteurs DAF et MERCEDES. Plus de 180 cartes grises de nos partenaires affrétés. Renouvelée tous les 3 ans.",
    img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80",
  },
  {
    kicker: "Température Dirigée",
    title: "Fruits, légumes, poissons et produits pharmaceutiques transportés dans des conditions optimales. Camions frigorifiques équipés de data loggers et thermographes.",
    img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
  },
  {
    kicker: "Traçabilité & Digitalisation",
    title: "Flotte 100% géolocalisable. Accès à l'information en temps réel. Nous nous engageons à être constamment joignables pour garantir la traçabilité de vos marchandises.",
    img: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=800&q=80",
  },
];

export default function SliderUp() {
  return (
    <div
      className="slider-up-component custom-overlay"
      style={{ "--64155f60": "#ffffff", "--c1a3637e": "#ffffff" } as React.CSSProperties}
    >
      <div className="slider-up-component__container">
        <h2 className="slider-up-component__header-title">
          <span>Des solutions de fret adaptées à chaque besoin.</span>
        </h2>
        <div className="slider-up-component__body">
          <div className="slider-up-component__text-list">
            {ITEMS.map((item, i) => (
              <div key={i} className="slider-up-item text-item is-active">
                <div className="slider-up-item__media-block">
                  <img src={item.img} className="slider-up-item__img" alt={item.kicker} loading="lazy" />
                </div>
                <div className="slider-up-item__text-block" style={{ opacity: 1 }}>
                  <h5 className="slider-up-item__kicker">{item.kicker}</h5>
                  <h3 className="slider-up-item__title">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="slider-up-component__img-list" style={{ position: "sticky", top: "20vh" }}>
            {ITEMS.map((item, i) => (
              <div
                key={i}
                className="slider-up-item img-item is-active"
                style={{ display: "block", margin: 0, position: i === 0 ? "relative" : "absolute", top: 0, left: 0, width: "100%", height: i === 0 ? "auto" : "100%" }}
              >
                <div
                  className="slider-up-item__media-block"
                  style={{
                    display: "block",
                    position: i === 0 ? "relative" : "absolute",
                    top: 0, left: 0, right: 0,
                    bottom: i === 0 ? undefined : 0,
                    width: "100%",
                    opacity: i === 0 ? 1 : 0,
                    borderRadius: 12,
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.kicker}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
