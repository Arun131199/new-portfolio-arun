import './CtaBand.css'

function CtaBand() {
  return (
    <section id="contact" className="cta-band">
      <div className="cta-band__left">
        <h2 className="cta-band__title">
          Have any <span>project idea?</span>
        </h2>
        <p className="cta-band__sub">Let's build something great together.</p>
      </div>
      <a
        className="cta-band__btn"
        href="mailto:kumaravelarunkumar12@gmail.com"
      >
        Contact Now →
      </a>
    </section>
  )
}

export default CtaBand
