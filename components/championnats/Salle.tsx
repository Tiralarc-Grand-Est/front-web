import React from "react"
import { Link } from "gatsby"

export const ChampionnatsSalle: React.FC = () => (
  <div>
    <h3>Mode de sélection</h3>

    <p>
      <ul>
        <li>
          Les classements régionaux et l’arrêté sélectif pour les Championnats régionaux sont établis sur{" "}
          <b>la moyenne des 3 meilleurs scores</b>. En cas d’égalité, la même règle que pour un Championnat de France sera appliquée.
        </li>

        <li>
          La période des classements régionaux débute le 1<sup>er</sup> septembre et s’arrête le 31 août suivant. Les conditions de
          participation aux championnats Régionaux sont identiques que pour un championnat de France.{" "}
          <b>L’arrêté sélectif se fera 6 jours avant chaque championnat</b> Régional Salle &quot;Adultes&quot; et &quot;Jeunes&quot;.
        </li>

        <li>
          Le classement est disponible{" "}
          <b>
            <Link to="/vie-sportive/classement/">ici</Link>
          </b>
          .
        </li>

        <li>
          Chaque archer désirant participer aux Championnats Régionaux doit faire{" "}
          <b>une demande d’inscription spontanée via le formulaire en ligne disponible juste au dessus</b>. Les archers préinscrits
          apparaîtront sur les classements régionaux hebdomadaires.
        </li>

        <li>Les classements régionaux sont établis selon le même règlement que pour les classements nationaux.</li>

        <li>
          La mise pour la participation à un championnat Régional &quot;Adultes&quot; ou &quot;Jeunes&quot; vous sera demandé par le club
          organisateur à travers son mandat.
        </li>

        <li>
          À l’issue des phases de qualifications (2 séries de 10 volées de 3 flèches), des <b>phases finales se tirant par matches</b>{" "}
          seront organisées selon le même principe que pour un championnat de France de tir en Salle.{" "}
          <b>Tous les tirs se feront sur tri-spot.</b>
        </li>

        <li>
          À noter que <b>tous les archers présents seront retenus pour les phases finales.</b> Il n’y aura donc pas d’éliminations directes
          à l’issue des phases de qualifications.
        </li>

        <li>Les phases finales se tireront directement à l’issue des qualifications.</li>
      </ul>
    </p>
  </div>
)
