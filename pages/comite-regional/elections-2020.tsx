import React from "react";
import { Helmet } from "react-helmet";
import { Layout } from "../../components/layout/Layout";

const Statuts: React.FC = () => (
  <Layout>
    <Helmet title="Archers du Grand Est, soyez au rendez-vous des prochaines élections" />
    <div className="mt-3 text-center">
      <iframe
        title="Archers du Grand Est, soyez au rendez-vous des prochaines élections"
        src="https://docs.google.com/forms/d/e/1FAIpQLSfrFlcySKbw2NRoq1TwE8340P-k6eSYNDNCgG8vDZdQDfq0Vg/viewform?embedded=true"
        width="640"
        height="2251"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
      >
        Chargement…
      </iframe>
    </div>
  </Layout>
);

export default Statuts;
