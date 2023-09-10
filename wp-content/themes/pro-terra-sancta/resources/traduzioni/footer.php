<?php
function get_footer_translation(){
		$toRet = array();
		$toRet['title'] = new Traduzione();
		$toRet['desc'] = new Traduzione();
		$toRet['motto'] = new Traduzione();
		$toRet['sede1'] = new Traduzione();
		$toRet['sede1desc'] = new Traduzione();
		$toRet['sede2'] = new Traduzione();
		$toRet['sede2desc'] = new Traduzione();
    $toRet['sede3'] = new Traduzione();
    $toRet['sede3desc'] = new Traduzione();
		$toRet['scrivici'] = new Traduzione();
		$toRet['dona_btn'] = new Traduzione();
		$toRet['giornale_btn'] = new Traduzione();
		$toRet['ibrevery'] = new Traduzione();
		$toRet['link_news'] = new Traduzione();
		$toRet['link_stampa'] = new Traduzione();
		$toRet['link_foto'] = new Traduzione();
		$toRet['link_video'] = new Traduzione();
		$toRet['link_privacy'] = new Traduzione();

		$toRet['title']->setIt("Associazione pro Terra Sancta");
		$toRet['title']->setEn("pro Terra Sancta Association");
		$toRet['title']->setEs("Asociación pro Terra Sancta");
		$toRet['title']->setFr("Association pro Terra Sancta");
		$toRet['title']->setDe("pro Terra Sancta Verein");

		/*$toRet['desc']->setIt("Sosteniamo i luoghi santi e le comunità cristiane di Terra Santa");
		$toRet['desc']->setEn("We support the holy places and the Christian communities of the Holy Land");
		$toRet['desc']->setEs("Apoyamos los lugares santos y las comunidades cristianas de Tierra Santa.");
		$toRet['desc']->setFr("Nous soutenons les lieux saints et les communautés chrétiennes de Terre Sainte");
		$toRet['desc']->setDe("Wir unterstützen die heiligen Orte und die christlichen Gemeinschaften des Heiligen Landes");*/

		/*$toRet['motto']->setIt("INSIEME AI FRANCESCANI DI TERRA SANTA");
		$toRet['motto']->setEn("TOGETHER WITH THE FRANCISCANS OF THE HOLY LAND");
		$toRet['motto']->setEs("JUNTOS CON LOS FRANCISCANOS DE LA TIERRA SANTA");
		$toRet['motto']->setFr("ENSEMBLE AVEC LES FRANCISCAINS DE LA TERRE SAINTE");
		$toRet['motto']->setDe("ZUSAMMEN MIT DEN FRANCISCANS DES HEILIGEN LANDES");*/

		$toRet['motto']->setIt("CREARE LEGAMI TRA LA TERRA SANTA E IL MONDO");
		$toRet['motto']->setEn("TO FOSTER BONDS BETWEEN THE HOLY LAND AND THE WORLD");
		$toRet['motto']->setEs("UNIENDO TIERRA SANTA AL MUNDO");
		$toRet['motto']->setFr("CONSTRUIRE DES LIENS ENTRE LA TERRE SAINTE ETLE MONDE");
		$toRet['motto']->setDe("VERBINDUNGEN ZWISCHEN DEM HEILIGEN LAND UND DER WELT HERSTELLEN");

		$toRet['sede1']->setIt("Milano");
		$toRet['sede1']->setEn("Milan");
		$toRet['sede1']->setEs("Milán");
		$toRet['sede1']->setFr("Milan");
		$toRet['sede1']->setDe("Mailand");

		$toRet['sede1desc']->setIt("20121 Piazza Sant'Angelo, 2");
		$toRet['sede1desc']->setEn("20121 Piazza Sant'Angelo, 2");
		$toRet['sede1desc']->setEs("20121 Piazza Sant'Angelo, 2");
		$toRet['sede1desc']->setFr("20121 Piazza Sant'Angelo, 2");
		$toRet['sede1desc']->setDe("20121 Piazza Sant'Angelo, 2");

		$toRet['sede2']->setIt("Gerusalemme");
		$toRet['sede2']->setEn("Jerusalem");
		$toRet['sede2']->setEs("Jerusalén");
		$toRet['sede2']->setFr("Jérusalem");
		$toRet['sede2']->setDe("Jerusalem");

		$toRet['sede2desc']->setIt("91001 St. Saviour Monastery POB 186");
		$toRet['sede2desc']->setEn("91001 St. Saviour Monastery POB 186");
		$toRet['sede2desc']->setEs("91001 St. Saviour Monastery POB 186");
		$toRet['sede2desc']->setFr("91001 St. Saviour Monastery POB 186");
		$toRet['sede2desc']->setDe("91001 St. Saviour Monastery POB 186");

    $toRet['sede3']->setIt("Londra");
    $toRet['sede3']->setEn("London");
    $toRet['sede3']->setEs("Londres");
    $toRet['sede3']->setFr("Londres");
    $toRet['sede3']->setDe("London");

    $toRet['sede3desc']->setIt("34 New House, 67-68 Hatton Garden, UK");
    $toRet['sede3desc']->setEn("34 New House, 67-68 Hatton Garden, UK");
    $toRet['sede3desc']->setEs("34 New House, 67-68 Hatton Garden, UK");
    $toRet['sede3desc']->setFr("34 New House, 67-68 Hatton Garden, UK");
    $toRet['sede3desc']->setDe("34 New House, 67-68 Hatton Garden, UK");

		$toRet['dona_btn']->setIt("DONA");
		$toRet['dona_btn']->setEn("DONATE");
		$toRet['dona_btn']->setEs("DONA");
		$toRet['dona_btn']->setFr("FAIRE UN DON");
		$toRet['dona_btn']->setDe("SPENDEN");

    $toRet['scrivici']->setIt("SCRIVICI");
    $toRet['scrivici']->setEn("WRITE US");
    $toRet['scrivici']->setEs("ESCRIBENOS");
    $toRet['scrivici']->setFr("ÉCRIVEZ-NOUS");
    $toRet['scrivici']->setDe("SCHREIBEN SIE UNS");

		$toRet['giornale_btn']->setIt("SCARICA IL GIORNALINO");
		$toRet['giornale_btn']->setEn("DOWNLOAD THE JOURNAL");
		$toRet['giornale_btn']->setEs("Descargar el diario");
		$toRet['giornale_btn']->setFr("TELECHARGER LE JOURNAL");
		$toRet['giornale_btn']->setDe("LADEN SIE DAS JOURNAL HERUNTER");

		$toRet['ibrevery']->setIt("iBreviary e’ il tuo <b>Breviario portatile</b>. Puoi usarlo per <b>pregare</b> con i testi completi della Liturgia delle Ore, <b>in ben 5 lingue</b>. Basta avviare l’applicazione e ti troverai davanti tutti i testi del giorno.");
		$toRet['ibrevery']->setEn("iBreviary is your <b>portable Breviary</b> that allows you to pray  anytime and everywhere with complete texts of the Liturgy of the Hours, in 5 different languages.");
		$toRet['ibrevery']->setEs("Gracias al <b>iBreviary Pro</b> Terra Sancta es posible unirse en oración recitando el Breviario y a través de las lecturas que se utilizan en los santuarios de la Tierra Santa. La aplicación se distribuye de forma gratuita a nivel mundial y se produce en muchos idiomas");
		$toRet['ibrevery']->setFr("iBreviary est votre <b>bréviaire portable</b> qui vous permet de prier à tout moment et partout avec des textes complets de la liturgie des heures, en 5 langues différentes");
		$toRet['ibrevery']->setDe("iBreviary ist Ihr <b>tragbares Brevier</b>, mit dem Sie jederzeit und überall mit vollständigen Texten der Stundenliturgie in 5 verschiedenen Sprachen beten können.");

		$toRet['link_news']->setIt("News");
		$toRet['link_news']->setEn("News");
		$toRet['link_news']->setEs("Noticias");
		$toRet['link_news']->setFr("Nouvelles");
		$toRet['link_news']->setDe("Nachrichten");

		$toRet['link_stampa']->setIt("Contatti stampa");
		$toRet['link_stampa']->setEn("Press contacts");
		$toRet['link_stampa']->setEs("Contactos de prensa");
		$toRet['link_stampa']->setFr("Contacts presse");
		$toRet['link_stampa']->setDe("Drücken Sie die Kontakte");

		$toRet['link_foto']->setIt("Foto");
		$toRet['link_foto']->setEn("Photo");
		$toRet['link_foto']->setEs("Foto");
		$toRet['link_foto']->setFr("Photo");
		$toRet['link_foto']->setDe("Foto");

		$toRet['link_video']->setIt("Video");
		$toRet['link_video']->setEn("Video");
		$toRet['link_video']->setEs("Vídeo");
		$toRet['link_video']->setFr("Vidéo");
		$toRet['link_video']->setDe("Video");

		$toRet['link_privacy']->setIt("Politica sulla privacy");
		$toRet['link_privacy']->setEn("Privacy policy");
		$toRet['link_privacy']->setEs("Política de privacidad");
		$toRet['link_privacy']->setFr("Politique de confidentialité");
		$toRet['link_privacy']->setDe("Datenschutzrichtlinie");

		return $toRet;
	}
