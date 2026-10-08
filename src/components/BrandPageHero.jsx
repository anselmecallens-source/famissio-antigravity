import React from 'react';
import { ArrowDownRight } from 'lucide-react';

export default function BrandPageHero({ number, label, title, description, image, imageAlt, caption, anchor = '#contenu' }) {
  return (
    <section className="fm-pagehero" aria-labelledby="fm-page-title">
      <div className="fm-pagehero-copy">
        <div className="fm-pagehero-kicker"><span>Famissio</span><i aria-hidden="true" />{number} · {label}</div>
        <h1 id="fm-page-title">{title}</h1>
        <p>{description}</p>
        <a className="fm-pagehero-link" href={anchor}>Continuer la visite <ArrowDownRight size={18} aria-hidden="true" /></a>
      </div>
      <figure className="fm-pagehero-figure">
        <div className="fm-pagehero-arch">
          <img src={image} alt={imageAlt} fetchPriority="high" />
        </div>
        <figcaption><span className="fm-pagehero-spark" aria-hidden="true">✳</span>{caption}</figcaption>
        <span className="fm-pagehero-number" aria-hidden="true">{number}</span>
      </figure>
      <span className="fm-pagehero-rule" aria-hidden="true" />
    </section>
  );
}
