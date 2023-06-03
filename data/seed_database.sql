BEGIN;

INSERT INTO "observation" (name, score, noaudit)
VALUES
  ('Non Audité', 0, 'retranché de la note max'),
  ('Point de conformité (A)', 20, ''),
  ('Point d''amélioration (B)', 10, ''),
  ('Non conforme (C)', 0, ''),
  ('Récurrence (D)', -20, '')
;

INSERT INTO "etablissement" (name)
VALUES
  ('Mac Do'),
  ('KFC'),
  ('Burger King')
;

INSERT INTO "question" (section, question, comment, pnni)
VALUES
  ('audit-documentaire','Présence du PMS à jour dans les locaux', 'test de commentaire 1', 0),
  ('audit-documentaire','Présence de thermomètre de contrôle (sonde / laser) en état de marche et vérification métrologique', 'test de commentaire 2', 0),
  ('audit-documentaire','Réalisation, enregistrement et archivage des contrôles à réception', 'test de commentaire 3', 0),
  ('audit-documentaire','Réalisation, enregistrement et archivage des contrôles des températures des chambres froides', 'test de commentaire 4', 1),
  ('audit-documentaire','Réalisation, enregistrement et archivage des contrôles des températures des produits lors de refroidissement en cellule', 'test de commentaire 5', 1),
  ('audit-documentaire','Réalisation, enregistrement et archivage des contrôles des températures des produits lors de la remise en température (regithermie)', 'test de commentaire 6', 0),
  ('audit-documentaire','Réalisation, enregistrement et archivage des contrôles T° de distribution en salle à manger', 'test de commentaire 7', 1),
  ('audit-documentaire','Réalisation, enregistrement et archivage des contrôles T° de distribution en chariot (étages)', 'test de commentaire 8', 0),
  ('audit-documentaire','Réalisation, enregistrement et archivage des contrôles T° à cœur du steak haché', 'test de commentaire 9', 1),
  ('audit-documentaire','Présence et respect des plannings de nettoyage', 'test de commentaire 10', 0),
  ('audit-documentaire','Enregistrement et archivage de la réalisation du nettoyage selon le planning (autocontrôle)', 'test de commentaire 11', 0),
  ('audit-documentaire','Présence plan de lutte anti-nuisible. Archivage fiches d''intervention de la société spécialisée', 'test de commentaire 12', 0),
  ('audit-documentaire','Classement, archivage des interventions d''une société spécialisée de maintenance', 'test de commentaire 13', 0),
  ('audit-documentaire','Classement-archivage des audits externes et analyses bactériologiques', 'test de commentaire 15', 0),
  ('audit-documentaire','Classement et archivage des interventions des services officiels', 'test de commentaire 16', 0),
  ('audit-documentaire','Formalisation d''un plan d''actions correctives en cas de résultat d''analyse non conforme', 'test de commentaire 17', 0),

  ('livraison-reception','Existence de connaissance des critères du plan de contrôle à réception', 'test de commentaire 1', 0),
  ('livraison-reception','Pertinence des contrôles par rapport aux risques', 'test de commentaire 2', 0),
  ('livraison-reception','Pertinence des actions correctives en cas de livraisons non conformes', 'test de commentaire 3', 0),
  ('livraison-reception','Identification d''une zone de dé-cartonnage', 'test de commentaire 4', 0),
  ('livraison-reception','Réalisation du déballage et dé-cartonnage avant rangement en chambre froide (suremballage)', 'test de commentaire 5', 0),
  ('livraison-reception','Conservation des étiquettes de Matières Premières en cas de déballage', 'test de commentaire 6', 1),
  ('livraison-reception','Absence de produits fragiles en attente de stockage', 'test de commentaire 7', 0),

  ('stockage-primaire','Identification claire des aires de stockage matières premières', 'test de commentaire 1', 0),
  ('stockage-primaire','Pertinence et respect du plan de rangement des chambres froides', 'test de commentaire 2', 0),
  ('stockage-primaire','Absence de stockage au sol', 'test de commentaire 3', 0),
  ('stockage-primaire','Respect des DLC', 'test de commentaire 4', 1),
  ('stockage-primaire','Respect des DDM', 'test de commentaire 5', 0),
  ('stockage-primaire','Respect de la rotation des stocks (FIFO)', 'test de commentaire 6', 0),
  ('stockage-primaire','Respect des températures de stockage', 'test de commentaire 7', 0),
  ('stockage-primaire','Actions correctives si températures de stockage non conforme', 'test de commentaire 8', 0),
  ('stockage-primaire','Produits d''entretien séparés des denrées alimentaires', 'test de commentaire 9', 0),
  ('stockage-primaire','Produits d''entretien stockés en bac de rétention', 'test de commentaire 10', 0),
  ('stockage-primaire','Congélation maison interdite', 'test de commentaire 11', 1),

  ('legumerie-deboitage','Identification spécifique de chaque zone', 'test de commentaire 1', 0),
  ('legumerie-deboitage','Séparation dans l''espace et/ou dans le temps du déboitage/décartonnage et du lavage des légumes', 'test de commentaire 2', 0),
  ('legumerie-deboitage','Connaissance et respect du protocole de décontamination des boites avant ouverture', 'test de commentaire 3', 0),
  ('legumerie-deboitage','Transvasement du contenu des boites de conserve dans des bacs fermés mis en chambre froide jour', 'test de commentaire 4', 0),
  ('legumerie-deboitage','Connaissance et respect du protocole de décontamination des végétaux (Vinaigre/Chlore)', 'test de commentaire 5', 0),
  ('legumerie-deboitage','Stockage des végétaux lavés, dans des bacs propres, protégés et mis en chambre froide jour', 'test de commentaire 6', 0),
  ('legumerie-deboitage','Conservation ou récupération des informations de traçabilité lors des opérations de prétraitement', 'test de commentaire 7', 1),
  ('legumerie-deboitage','Ouvre-boite non rouillé en bon état de marche', 'test de commentaire 8', 0),
  ('legumerie-deboitage','Présence de denrées propres et souillées conjointes', 'test de commentaire 9', 0),
  ('legumerie-deboitage','Respect de la procédure de décongélation', 'test de commentaire 10', 0),

  ('preparations-froides','Absence de cartons et emballages sur les surfaces de travail lors de la fabrication', 'test de commentaire 1', 0),
  ('preparations-froides','Absence de préparation à température ambiante >30 min', 'test de commentaire 2', 0),
  ('preparations-froides','Séparation dans le temps des opérations de déconditionnement et opérations de fabrication', 'test de commentaire 3', 0),
  ('preparations-froides','Identification pertinente et correcte des produits en cours de fabrication', 'test de commentaire 4', 1),
  ('preparations-froides','Respect des DLC secondaires des produits entamés', 'test de commentaire 5', 1),
  ('preparations-froides','Protection et identification des produits entamés', 'test de commentaire 6', 1),
  ('preparations-froides','Absence de produits d''origines différentes sur une même surface de travail', 'test de commentaire 7', 0),
  ('preparations-froides','Stockage immédiat au froid des produits finis dressés, dans l''attente du service', 'test de commentaire 8', 0),

  ('preparations-chaudes','Séparation dans le temps des opérations de déconditionnement et opérations de fabrication', 'test de commentaire 1', 0),
  ('preparations-chaudes','Protection et identification des produits si non utilisation immédiate pour le service', 'test de commentaire 2', 1),
  ('preparations-chaudes','Respect des DLC secondaires des produits entamés déconditionnées', 'test de commentaire 3', 1),
  ('preparations-chaudes','Absence de produits en décongélation à température ambiante', 'test de commentaire 4', 0),
  ('preparations-chaudes','Identification pertinente et correcte des produits décongelés', 'test de commentaire 5', 0),
  ('preparations-chaudes','Respect des DLC secondaires des produits décongelés', 'test de commentaire 6', 1),
  ('preparations-chaudes','Respect des règles de refroidissement en cellule (temps/température)', 'test de commentaire 7', 1),
  ('preparations-chaudes','Respect des règles de refroidissement par d''autres moyens que la cellule', 'test de commentaire 8', 0),
  ('preparations-chaudes','Absence de refroidissement à température ambiante > 30 minutes', 'test de commentaire 9', 1),
  ('preparations-chaudes','Respect des règles de régithermie', 'test de commentaire 10', 1),
  ('preparations-chaudes','Respect du traitement des restes et reliquats', 'test de commentaire 11', 1),
  ('preparations-chaudes','Traçabilité sur l''origine de la viande', 'test de commentaire 12', 0),
  ('preparations-chaudes','Maîtrise de la chaîne du chaud jusqu''au service', 'test de commentaire 13', 1),

  ('preparations-specifique','Préparations des différents régimes à partir du menu principal', 'test de commentaire 1', 0),
  ('preparations-specifique','Préparations des repas à texture modifiée 1 heure maximum avant distribution', 'test de commentaire 2', 0),
  ('preparations-specifique','Lavage et désinfection des outils de mixage avant fabrication', 'test de commentaire 3', 0),
  ('preparations-specifique','Mixage à froid des préparations froides', 'test de commentaire 4', 0),
  ('preparations-specifique','Mixage à chaud des préparations chaudes (>63°)', 'test de commentaire 5', 0),
  ('preparations-specifique','Maîtrise de la chaîne du chaud jusqu’à la distribution', 'test de commentaire 6', 1),
  ('preparations-specifique','Maîtrise de la chaîne du froid jusqu’à la distribution', 'test de commentaire 7', 0),

  ('distribution','Prélèvement des plats témoins en fin de service', 'test de commentaire 1', 1),
  ('distribution','Respect des quantités et de la représentativité des plats témoins', 'test de commentaire 2', 1),
  ('distribution','Identification correcte des plats témoins', 'test de commentaire 3', 1),
  ('distribution','Respect de la durée de conservation des plats témoins', 'test de commentaire 4', 1),
  ('distribution','Disposition pertinente des HO et des desserts en armoires ou meubles de distribution', 'test de commentaire 5', 0),
  ('distribution','Respect de la chaîne du froid pendant le service', 'test de commentaire 6', 0),
  ('distribution','Respect de la chaîne du chaud pendant le service', 'test de commentaire 7', 1),
  ('distribution','Respect du protocole d''utilisation des chariots de distribution (chargement, branchement, ..)', 'test de commentaire 8', 0),
  ('distribution','Utilisation dans les 24 heures des produits non présentés au service (avec identification)', 'test de commentaire 9', 0),
  ('distribution','Élimination des produits présentés au service', 'test de commentaire 10', 0),
  ('distribution','Identification des reliquats de préparation en chambre froide', 'test de commentaire 11', 0),

  ('hygiene-personnel','Accès réglementés à l''ensemble des locaux (absence de personne étrangère au service)', 'test de commentaire 1', 0),
  ('hygiene-personnel','Tenue vestimentaire propre et conforme', 'test de commentaire 2', 0),
  ('hygiene-personnel','Port de la charlotte', 'test de commentaire 3', 0),
  ('hygiene-personnel','Lavage des mains fréquent', 'test de commentaire 4', 0),
  ('hygiene-personnel','Lave-mains en nombre suffisant, conformes et approvisionnés', 'test de commentaire 5', 0),
  ('hygiene-personnel','Bon usage des gants', 'test de commentaire 6', 0),
  ('hygiene-personnel','Hygiène des manipulations (sale/propre)', 'test de commentaire 7', 0),
  ('hygiene-personnel','Comportement satisfaisant au travail', 'test de commentaire 8', 0),
  ('hygiene-personnel','Présence de tenue spécifique pour les visiteurs', 'test de commentaire 9', 0),

  ('hygiene-locaux','Respect du choix des produits de nettoyage et de désinfection et bonne utilisation effective', 'test de commentaire 1', 0),
  ('hygiene-locaux','Connaissance et respect des modes opératoires de nettoyage et de désinfection', 'test de commentaire 2', 0),
  ('hygiene-locaux','Rangement hygiénique des matériels de nettoyage', 'test de commentaire 3', 0),
  ('hygiene-locaux','Poste de nettoyage désinfection en état de fonctionner (approvisionné, propre ..)', 'test de commentaire 4', 0),
  ('hygiene-locaux','Présence des fiches techniques et de sécurité, à jour', 'test de commentaire 5', 0),
  ('hygiene-locaux','Propreté visuelle de la zone réception', 'test de commentaire 6', 1),
  ('hygiene-locaux','Propreté visuelle des locaux de stockage sec', 'test de commentaire 7', 1),
  ('hygiene-locaux','Propreté visuelle des armoires froides positives', 'test de commentaire 8', 1),
  ('hygiene-locaux','Propreté visuelle des armoires froides négatives', 'test de commentaire 9', 1),
  ('hygiene-locaux','Absence de givre dans les stockages négatifs', 'test de commentaire 10', 0),
  ('hygiene-locaux','Propreté visuelle des locaux de préparation froide', 'test de commentaire 11', 1),
  ('hygiene-locaux','Propreté visuelle des matériels en zone préparation froide', 'test de commentaire 12', 0),
  ('hygiene-locaux','Propreté visuelle de la zone de cuisson', 'test de commentaire 13', 1),
  ('hygiene-locaux','Propreté visuelle des matériels en zone de cuisson', 'test de commentaire 15', 0),
  ('hygiene-locaux','Propreté visuelle de zone distribution', 'test de commentaire 16', 1),
  ('hygiene-locaux','Propreté visuelle des matériels en zone distribution', 'test de commentaire 17', 0),
  ('hygiene-locaux','Propreté visuelle des vestiaires et sanitaires cuisine', 'test de commentaire 17', 0),
  ('hygiene-locaux','Propreté visuelle de la zone plonge batterie', 'test de commentaire 17', 0),
  ('hygiene-locaux','Propreté visuelle des matériels en zone plonge batterie', 'test de commentaire 17', 0),
  ('hygiene-locaux','Propreté visuelle de la zone plonge vaisselle', 'test de commentaire 17', 0),
  ('hygiene-locaux','Propreté visuelle des matériels en zone plonge vaisselle', 'test de commentaire 17', 0),
  ('hygiene-locaux','Propreté visuelle du local poubelle', 'test de commentaire 17', 0),
  ('hygiene-locaux','Propreté visuelle des matériels et surface de travail', 'test de commentaire 17', 0),
  ('hygiene-locaux','Collecte et évacuation des déchets sans risque de contamination croisée avec des denrées', 'test de commentaire 17', 0),

  ('trace-test','Présence du plat témoin', 'test de commentaire 1', 0),
  ('trace-test','Traçabilité de la température de distribution', 'test de commentaire 2', 0),
  ('trace-test','Température de distribution indiquée sur traçabilité', 'test de commentaire 3', 0),
  ('trace-test','Traçabilité de régithermie', 'test de commentaire 4', 0),
  ('trace-test','Température de régithermie indiquée sur la traçabilité', 'test de commentaire 5', 0),
  ('trace-test','Traçabilité de refroidissement', 'test de commentaire 6', 0),
  ('trace-test','Température de refroidissement indiqué sur la traçabilité', 'test de commentaire 7', 0),
  ('trace-test','Traçabilité de stockage', 'test de commentaire 8', 0),
  ('trace-test','Température de stockage indiqué sur la traçabilité', 'test de commentaire 9', 0),
  ('trace-test','Traçabilité de réception', 'test de commentaire 10', 0),
  ('trace-test','Température de réception indiquée sur la traçabilité', 'teest de commentaire 10', 0)

  ;

  INSERT INTO "users" ("name", "email", "password", "role_id")
VALUES ('Alain', 'alain@formaction.com', '$2a$10$TovomSDidILsMKM8ICVPRuZKU436DJOWtQ.QpJ1i6F5s9qA.VULpa', 1), 
('Maurice Admin', 'admin@admin.com', '$2b$10$nIIIGWlkm3SzwVF81h4qOekR8ABLUqXoiWAVSkB6oNpKroyyky84G', 2);



COMMIT;
