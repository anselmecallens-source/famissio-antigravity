import { ArrowDownRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomeHero() {
  return (
    <section className="fm-home-hero" aria-labelledby="fm-home-title">
      <div className="fm-home-copy">
        <p className="fm-home-kicker"><span className="fm-home-kicker-dot" /> Familles · paroisses · mission</p>
        <h1 id="fm-home-title">L’Église<br />prend la <em>route.</em></h1>
        <p className="fm-home-lead">Famissio rassemble des familles missionnaires qui rejoignent des paroisses pour une semaine de prière, de formation et de rencontres.</p>
        <div className="fm-home-actions">
          <Link to="/missions" className="fm-home-primary">Découvrir nos missions <ArrowRight size={18} aria-hidden="true" /></Link>
          <a href="#mission" className="fm-home-secondary">Notre manière de faire <ArrowDownRight size={18} aria-hidden="true" /></a>
        </div>
        <div className="fm-home-signature"><span>Une semaine</span><i /><span>Une paroisse</span><i /><span>Beaucoup de rencontres</span></div>
      </div>
      <div className="fm-home-visual">
        <div className="fm-home-arch"><img src="/assets/images/Equipe missionnaire.webp" alt="Une famille Famissio à la rencontre d'habitants" fetchPriority="high" /></div>
        <span className="fm-home-arc" aria-hidden="true" />
        <div className="fm-home-photo-note"><span>Famissio · sur le terrain</span><strong>Écouter.<br />Rencontrer.<br />Rester disponibles.</strong></div>
        <div className="fm-home-seal" aria-label="Des familles en mission"><span>Familles</span><strong>F</strong><span>ensemble</span></div>
      </div>
      <div className="fm-home-route" aria-hidden="true"><span /><i /><i /><i /><b /></div>
    </section>
  );
}
