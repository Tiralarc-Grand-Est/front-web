import React from "react";
import Link from "next/link";
import Layout from "../components/layout/Layout";

const NotFoundPage: React.FC = () => (
  <Layout
    title="Page introuvable - M"
    description="La flèche a manqué sa cible."
  >
    <div className="container">
      <h1>Page introuvable - M</h1>
      <Link href="/">
        <a className="mx-auto my-3 btn btn-primary d-block">
          Retour à l&apos;accueil
        </a>
      </Link>
    </div>
  </Layout>
);

export default NotFoundPage;
