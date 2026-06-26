export type Language = 'ca' | 'es' | 'en';

export const translations = {
    ca: {
        title: "VandeCul — Estudi de cinema documental i ficció d'autor",
        description: "Estudi de cinema documental i ficció d'autor a Barcelona. Creem peces audiovisuals per institucions, marques i creadors.",
        keywords: "estudi cinema documental, ficció d'autor, Barcelona, producció audiovisual, cinema d'autor, crònica institucional, docuficció",
        nav: {
            serveis: "SERVEIS",
            projectes: "PROJECTES",
            proces: "PROCÉS",
            contacte: "CONTACTE",
            cta: "Sol·licitar producció"
        },
        hero: {
            label: "DOC.AUDIOVISUAL · 2026",
            h1: ["REALITAT.", "FICCIÓ.", "DOCUMENTAL"],
            valueProp: "Cinema documental i ficció d'autor per institucions, marques i creadors que volen explicar històries amb profunditat.",
            summary: "Creem peces audiovisuals d'autor per associacions, institucions, empreses i marques que busquen documentar o relatar una història amb visió creativa.",
            ctaPrimary: "Iniciar projecte",
            ctaSecondary: "Descobreix què fem"
        },
        marquee: "CINEMA D'AUTOR ★ DOCUMENTAL ★ DOCUFICCIÓ ★ CRÒNICA INSTITUCIONAL ★ HISTÒRIES DE MARCA ★ RECERCA VISUAL ★ LLEGAT HISTÒRIC ★",
        serveis: {
            header: "// ESTRUCTURES NARRATIVES",
            h2: "Formats per al pensament, la realitat, la memòria i la imaginació.",
            cards: [
                { title: "Cinema Documental", desc: "Exploració profunda de la realitat mitjançant una mirada artística i rigorosa, capturant l'essència del subjecte." },
                { title: "Docuficció", desc: "Híbrid entre el testimoni real i la dramatització narrativa per potenciar l'impacte emocional de la veritat." },
                { title: "Crònica Històrica", desc: "Preservació del llegat institucional i civil a través de la recerca d'arxiu i el muntatge contemporani." },
                { title: "Documental de Marca", desc: "Cinema que construeix valors de marca des de l'autenticitat, lluny de la publicitat convencional." },
                { title: "Peces de Ficció", desc: "Creació de mons imaginaris sota una producció meticulosa i una direcció de fotografia d'avantguarda." },
                { title: "Assaig Audiovisual", desc: "Projectes experimentals de recerca visual que qüestionen el llenguatge cinematogràfic tradicional." }
            ],
            cta: "Demana pressupost"
        },
        projectes: {
            header: "// PECES SELECCIONADES",
            h2: "Arxiu Visual",
            stats: {
                records: "TOTAL_PECES",
                year: "INDEX_ANYS"
            },
            ctaTrailer: "Veure tràiler",
            ctaArchive: "Veure tot l'arxiu"
        },
        proces: {
            header: "// WORKFLOW",
            h2: "L'arquitectura darrere la imatge.",
            steps: [
                { title: "Recerca i Guió", desc: "Analitzem el context, busquem l'ànima de la història i definim una estructura narrativa sòlida abans d'encendre les càmeres. Rigor documental i visió creativa." },
                { title: "Producció i Postproducció", desc: "Edició i muntatge rítmic que prioritza el contingut, l'estètica i la claredat narrativa." },
                { title: "Masterització i Lliurament", desc: "Correcció de color cinematogràfica, disseny sonor envoltant i exportació en formats d'arxiu per a qualsevol plataforma o exhibició." }
            ],
            cta: "Vull aquest procés per al meu projecte"
        },
        clients: {
            header: "// CLIENTS",
            title: "Han confiat en nosaltres",
            testimonial: "La professionalitat i la sensibilitat artística de VandeCul van elevar el nostre projecte a un nivell que no esperàvem.",
            cite: "— Client institucional"
        },
        contacte: {
            header: "// CONTACTE",
            h2: "Explica'ns la teva pròxima història.",
            microCta: "Responem en menys de 48h",
            labels: ["ADAPTATS A PLECS TÈCNICS", "PROPOSTA EN 48H", "QUALITAT D'ARXIU"],
            address: "C/ Calabria 163. Barcelona.",
            form: {
                nom: "Nom o Organisme",
                email: "Correu electrònic",
                genere: { label: "Gènere / Format", placeholder: "Selecciona..." },
                pressupost: { label: "Pressupost orientatiu", placeholder: "Selecciona..." },
                objectiu: "Objectiu del projecte",
                deadline: "Deadline / Timing",
                trucada: "Vull que em truqueu",
                telefon: "Telèfon",
                placeholders: {
                    nom: "Introdueix aquí...",
                    email: "nom@exemple.com",
                    objectiu: "Ex. Arxiu Històric",
                    deadline: "Ex. Setembre 2026",
                    telefon: "+34 600 000 000"
                },
                submit: "Enviar Sol·licitud",
                dossier: "Descarregar dossier",
                footer: "Què passa després? Revisarem el teu projecte i et contactarem en menys de 48h amb una proposta personalitzada."
            },
            success: {
                h3: "Sol·licitud enviada",
                p: "Gràcies! Ens posarem en contacte en menys de 48h amb una proposta personalitzada per al teu projecte.",
                cta: "Enviar una altra sol·licitud"
            }
        },
        footer: {
            legal: ["Avís Legal", "Privacitat", "Cookies"],
            rights: "© 2026 VandeCul CINEMA STUDIO. TOTS ELS DRETS RESERVATS.",
            legalModal: {
                title: "AVÍS LEGAL",
                content: [
                    "En compliment del deure d’informació establert per la normativa aplicable, s’informa que el present lloc web és titularitat de Marc Xicola amb domicili a C/ Calabria 164, NIF/52172995W, i correu electrònic de contacte VandeCul.produccions@gmail.com.",
                    "L’accés i l’ús d’aquest lloc web atribueixen la condició de persona usuària, i impliquen l’acceptació plena i sense reserves de les condicions recollides en aquest Avís Legal. La persona usuària es compromet a fer un ús adequat dels continguts i serveis que el titular ofereix a través del web i a no emprar-los per desenvolupar activitats il·lícites o contràries a la bona fe i a l’ordre públic.",
                    "Tots els continguts d’aquest lloc web, incloent-hi textos, imatges, dissenys, logotips, arxius i qualezvol altre material, estan protegits pels drets de propietat intel·lectual i industrial del titular o de tercers autoritzats. Queda prohibida la reproducció, distribució, comunicació pública o transformació total o parcial sense l’autorització prèvia i per escrit del titular.",
                    "El titular no es fa responsable dels danys o perjudicis derivats de l’ús indegut del lloc web, ni dels continguts de tercers als quals es pugui accedir mitjançant enllaços externs. Així mateix, es reserva el dret de modificar en qualsevol moment i sense avís previ la informació continguda al web, així com la seva configuració o presentació.",
                    "Aquest Avís Legal es regeix per la legislació espanyola. Per a qualsevol controvèrsia que pogués derivar-se de l’accés o ús del web, les parts se sotmeten als jutjats i tribunals que corresponguin d’acord amb la normativa aplicable."
                ],
                close: "Tancar"
            },
            privacyModal: {
                title: "POLÍTICA DE PRIVACITAT",
                content: [
                    "En compliment del Reglament (UE) 2016/679, de 27 d’abril de 2016, General de Protecció de Dades (RGPD), i de la Llei orgànica 3/2018, de 5 de desembre, de protecció de dades personals i garantia dels drets digitals, s’informa de la present política de privacitat.",
                    "1. Responsable del tractament\nResponsable: Marc Xicola\nNIF: 52172995W\nAdreça: C/ Calabria 164\nCorreu electrònic: vandecul.produccions@gmail.com\nLloc web: VandeCul.cat",
                    "2. Finalitat del tractament\nLes dades personals recollides a través d’aquest lloc web seran tractades amb les finalitats següents:\n- Atendre consultes i sol·licituds rebudes mitjançant els formularis de contacte.\n- Gestionar la relació comercial o professional amb les persones usuàries.\n- Enviar comunicacions informatives o comercials, quan hi hagi consentiment previ.\n- Complir amb les obligacions legals aplicables.",
                    "3. Legitimació\nLa base legal per al tractament de les dades és:\n- El consentiment de la persona interessada.\n- L’execució d’un contracte o l’aplicació de mesures precontractuals.\n- El compliment d’obligacions legals.\n- L’interès legítim, quan sigui procedent.",
                    "4. Conservació de les dades\nLes dades es conservaran durant el temps necessari per complir la finalitat per a la qual van ser recollides i, posteriorment, durant els terminis legalment establerts. Un cop transcorreguts aquests terminis, es suprimiran amb mesures de seguretat adequades.",
                    "5. Destinataris\nLes dades no se cediran a tercers, excepte obligació legal o quan sigui necessari per a la prestació d’un servei vinculat al responsable del tractament. En aquests casos, només s’encarregaran del tractament aquells tercers que ofereixin garanties adequades de conformitat amb la normativa vigent.",
                    "6. Drets de les persones usuàries\nLa persona usuària pot exercir en qualsevol moment els drets d’accés, rectificació, supressió, oposició, limitació del tractament i portabilitat de les dades, així com retirar el consentiment atorgat, mitjançant escrit adreçat a vandecul.produccions@gmail.com, adjuntant còpia d’un document acreditatiu de la identitat.\nAixí mateix, si considera que el tractament de les seves dades no s’ajusta a la normativa, pot presentar una reclamació davant l’Autoritat Catalana de Protecció de Dades o davant l’Agència Espanyola de Protecció de Dades, segons correspongui.",
                    "7. Mesures de seguretat\nEl responsable del tractament adopta les mesures tècniques i organitzatives necessàries per garantir la seguretat, integritat i confidencialitat de les dades personals, i per evitar-ne la pèrdua, alteració o accés no autoritzat.",
                    "8. Canvis en la política de privacitat\nAquesta política de privacitat podrà ser actualitzada en qualsevol moment per adaptar-la a modificacions legals o tècniques. Es recomana revisar-la periòdicament."
                ],
                close: "Tancar"
            },
            cookiesModal: {
                title: "POLÍTICA DE COOKIES",
                content: [
                    "Aquest lloc web utilitza cookies i tecnologies similars per garantir el funcionament tècnic del web, analitzar el trànsit i millorar l'experiència d'usuari.",
                    "1. Què són les cookies?\nLes cookies són petits fitxers de text que s'emmagatzemen al vostre dispositiu quan visiteu un lloc web. S'utilitzen per reconèixer l'usuari, emmagatzemar preferències i oferir una navegació més eficient.",
                    "2. Tipus de cookies que utilitzem\n- Cookies Essencials (Tècniques): Són necessàries per al funcionament bàsic del lloc web. No es poden desactivar.\n- Cookies de Preferències: Permeten recordar informació com l'idioma seleccionat.\n- Cookies d'Estadística: Ens ajuden a entendre com els visitants interactuen amb el web (per exemple, Google Analytics).",
                    "3. Gestió de cookies\nPodeu configurar el vostre navegador per bloquejar o alertar sobre aquestes cookies, però algunes parts del lloc web no funcionaran. La majoria dels navegadors permeten gestionar les preferències de cookies a través dels seus ajustos.",
                    "4. Canvis en la política\nPodem actualitzar aquesta política per reflectir canvis en les cookies que utilitzem o per motius legals. Us recomanem que consulteu aquesta secció periòdicament."
                ],
                close: "Tancar"
            },
            cookieBanner: {
                message: "Utilitzem cookies pròpies i de tercers per millorar l'experiència de l'usuari i analitzar el trànsit. Pots acceptar només les bàsiques o totes les cookies.",
                acceptBasic: "Acceptar bàsiques",
                acceptAll: "Acceptar totes",
                moreInfo: "Més informació"
            }
        }
    },
    es: {
        title: "VandeCul — Estudio de cine documental y ficción de autor",
        description: "Estudio de cine documental y ficción de autor en Barcelona. Creamos piezas audiovisuales para instituciones, marcas y creadores.",
        keywords: "estudio cine documental, ficción de autor, Barcelona, producción audiovisual, cine de autor, crónica institucional, docuficción",
        nav: {
            serveis: "SERVICIOS",
            projectes: "PROYECTOS",
            proces: "PROCESO",
            contacte: "CONTACTO",
            cta: "Solicitar producción"
        },
        hero: {
            label: "DOC.AUDIOVISUAL · 2026",
            h1: ["REALIDAD.", "FICCIÓN.", "DOCUMENTAL"],
            valueProp: "Cine documental y ficción de autor para instituciones, marcas y creadores que buscan narrar historias con profundidad.",
            summary: "Creamos piezas audiovisuales de autor para asociaciones, instituciones, empresas y marcas que buscan documentar o relatar una historia con visión creativa.",
            ctaPrimary: "Iniciar proyecto",
            ctaSecondary: "Descubre qué hacemos"
        },
        marquee: "CINE DE AUTOR ★ DOCUMENTAL ★ DOCUFICCIÓN ★ CRÓNICA INSTITUCIONAL ★ HISTORIAS DE MARCA ★ INVESTIGACIÓN VISUAL ★ LEGADO HISTÓRICO ★",
        serveis: {
            header: "// ESTRUCTURAS NARRATIVAS",
            h2: "Formatos para el pensamiento, la realidad, la memoria y la imaginación.",
            cards: [
                { title: "Cine Documental", desc: "Exploración profunda de la realidad mediante una mirada artística y rigurosa, capturando la esencia del sujeto." },
                { title: "Docuficción", desc: "Híbrido entre el testimonio real y la dramatización narrativa para potenciar el impacto emocional de la verdad." },
                { title: "Crónica Histórica", desc: "Preservación del legado institucional y civil a través de la investigación de archivo y el montaje contemporáneo." },
                { title: "Documental de Marca", desc: "Cine que construye valores de marca desde la autenticidad, lejos de la publicidad convencional." },
                { title: "Piezas de Ficción", desc: "Creación de mundos imaginarios bajo una producción meticulosa y una dirección de fotografía de vanguardia." },
                { title: "Ensayo Audiovisual", desc: "Proyectos experimentales de investigación visual que cuestionan el lenguaje cinematográfico tradicional." }
            ],
            cta: "Solicitar presupuesto"
        },
        projectes: {
            header: "// PIEZAS SELECCIONADAS",
            h2: "Archivo Visual",
            stats: {
                records: "TOTAL_PIEZAS",
                year: "INDICE_AÑOS"
            },
            ctaTrailer: "Ver tráiler",
            ctaArchive: "Ver todo el archivo"
        },
        proces: {
            header: "// WORKFLOW",
            h2: "La arquitectura detrás de la imagen.",
            steps: [
                { title: "Investigación y Guion", desc: "Analizamos el contexto, buscamos el alma de la historia y definimos una estructura narrativa sólida antes de encender las cámaras. Rigor documental y visión creativa." },
                { title: "Producción y Postproducción", desc: "Edición y montaje rítmico que prioriza el contenido, la estética y la claridad narrativa." },
                { title: "Masterización y Entrega", desc: "Corrección de color cinematográfica, diseño sonoro envolvente y exportación en formatos de archivo para cualquier plataforma o exhibición." }
            ],
            cta: "Quiero este proceso para mi proyecto"
        },
        clients: {
            header: "// CLIENTES",
            title: "Han confiado en nosotros",
            testimonial: "La profesionalidad y la sensibilidad artística de VandeCul elevaron nuestro proyecto a un nivel que no esperábamos.",
            cite: "— Cliente institucional"
        },
        contacte: {
            header: "// CONTACTO",
            h2: "Cuéntanos tu próxima historia.",
            microCta: "Respondemos en menos de 48h",
            labels: ["ADAPTADOS A PLIEGOS TÉCNICOS", "PROPUESTA EN 48H", "CALIDAD DE ARCHIVO"],
            address: "C/ Calabria 163. Barcelona.",
            form: {
                nom: "Nombre o Organismo",
                email: "Correo electrónico",
                genere: { label: "Género / Formato", placeholder: "Selecciona..." },
                pressupost: { label: "Presupuesto orientativo", placeholder: "Selecciona..." },
                objectiu: "Objetivo del proyecto",
                deadline: "Deadline / Timing",
                trucada: "Quiero que me llaméis",
                telefon: "Teléfono",
                placeholders: {
                    nom: "Introduce aquí...",
                    email: "nombre@ejemplo.com",
                    objectiu: "Ej. Archivo Histórico",
                    deadline: "Ej. Septiembre 2026",
                    telefon: "+34 600 000 000"
                },
                submit: "Enviar Solicitud",
                dossier: "Descargar dossier",
                footer: "¿Qué pasa después? Revisaremos tu proyecto y te contactaremos en menos de 48h con una propuesta personalizada."
            },
            success: {
                h3: "Solicitud enviada",
                p: "¡Gracias! Nos pondremos en contacto en menos de 48h con una propuesta personalizada para tu proyecto.",
                cta: "Enviar otra solicitud"
            }
        },
        footer: {
            legal: ["Aviso Legal", "Privacidad", "Cookies"],
            rights: "© 2026 VandeCul CINEMA STUDIO. TODOS LOS DERECHOS RESERVADOS.",
            legalModal: {
                title: "AVISO LEGAL",
                content: [
                    "En cumplimiento del deber de información establecido por la normativa aplicable, se informa que el presente sitio web es titularidad de Marc Xicola con domicilio en C/ Calabria 164, NIF/52172995W, y correo electrónico de contacto VandeCul.produccions@gmail.com.",
                    "El acceso y uso de este sitio web atribuyen la condición de persona usuaria, e implican la aceptación plena y sin reservas de las condiciones recogidas en este Aviso Legal. La persona usuaria se compromete a hacer un uso adecuado de los contenidos y servicios que el titular ofrece a través de la web y a no emplearlos para desarrollar actividades ilícitas o contrarias a la buena fe y al orden público.",
                    "Todos los contenidos de este sitio web, incluyendo textos, imágenes, diseños, logotipos, archivos y cualquier otro material, están protegidos por los derechos de propiedad intelectual e industrial del titular o de terceros autorizados. Queda prohibida la reproducción, distribución, comunicación pública o transformación total o parcial sin la autorización previa y por escrito del titular.",
                    "El titular no se hace responsable de los daños o perjuicios derivados del uso indebido del sitio web, ni de los contenidos de terceros a los que se pueda acceder mediante enlaces externos. Asimismo, se reserva el derecho de modificar en cualquier momento y sin aviso previo la información contenida en la web, así como su configuración o presentación.",
                    "Este Aviso Legal se rige por la legislación española. Para cualquier controversia que pudiera derivarse del acceso o uso de la web, las partes se someten a los juzgados y tribunales que correspondan de acuerdo con la normativa aplicable."
                ],
                close: "Cerrar"
            },
            privacyModal: {
                title: "POLÍTICA DE PRIVACIDAD",
                content: [
                    "En cumplimiento del Reglamento (UE) 2016/679, de 27 de abril de 2016, General de Protección de Datos (RGPD), y de la Ley Orgánica 3/2018, de 5 de diciembre, de protección de datos personales y garantía de los derechos digitales, se informa de la presente política de privacidad.",
                    "1. Responsable del tratamiento\nResponsable: Marc Xicola\nNIF: 52172995W\nDirección: C/ Calabria 164\nCorreo electrónico: vandecul.produccions@gmail.com\nSitio web: VandeCul.cat",
                    "2. Finalidad del tratamiento\nLos datos personales recogidos a través de este sitio web serán tratados con las siguientes finalidades:\n- Atender consultas y solicitudes recibidas mediante los formularios de contacto.\n- Gestionar la relación comercial o profesional con las personas usuarias.\n- Enviar comunicaciones informativas o comerciales, cuando haya consentimiento previo.\n- Cumplir con las obligaciones legales aplicables.",
                    "3. Legitimación\nLa base legal para el tratamiento de los datos es:\n- El consentimiento de la persona interesada.\n- La ejecución de un contrato o la aplicación de medidas precontractuantes.\n- El cumplimiento de obligaciones legales.\n- El interés legítimo, cuando sea procedente.",
                    "4. Conservación de los datos\nLos datos se conservarán durante el tiempo necesario para cumplir la finalidad para la que fueron recogidos y, posteriormente, durante los plazos legalmente establecidos. Una vez transcurridos estos plazos, se suprimirán con medidas de seguridad adecuadas.",
                    "5. Destinatarios\nLos datos no se cederán a terceros, excepto obligación legal o cuando sea necesario para la prestación de un servicio vinculado al responsable del tratamiento. En estos casos, solo se encargarán del tratamiento aquellos terceros que ofrezcan garantías adecuadas de conformidad con la normativa vigente.",
                    "6. Derechos de las personas usuarias\nLa persona usuaria puede ejercer en cualquier momento los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad de los datos, así como retirar el consentimiento otorgado, mediante escrito dirigido a vandecul.produccions@gmail.com, adjuntando copia de un documento acreditativo de la identidad.\nAsimismo, si considera que el tratamiento de sus datos no se ajusta a la normativa, puede presentar una reclamación ante la Autoridad Catalana de Protección de Datos o ante la Agencia Española de Protección de Datos, según corresponda.",
                    "7. Mecanismos de seguridad\nEl responsable del tratamiento adopta las medidas técnicas y organizativas necesarias para garantizar la seguridad, integridad y confidencialidad de los datos personales, y para evitar su pérdida, alteración o acceso no autorizado.",
                    "8. Cambios en la política de privacidad\nEsta política de privacidad podrá ser actualizada en cualquier momento para adaptarla a modificaciones legales o técnicas. Se recomienda revisarla periódicamente."
                ],
                close: "Cerrar"
            },
            cookiesModal: {
                title: "POLÍTICA DE COOKIES",
                content: [
                    "Este sitio web utiliza cookies y tecnologías similares para garantizar el funcionamiento técnico de la web, analizar el tráfico y mejorar la experiencia de usuario.",
                    "1. ¿Qué son las cookies?\nLas cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Se utilizan para reconocer al usuario, almacenar preferencias y ofrecer una navegación más eficiente.",
                    "2. Tipus de cookies que utilizamos\n- Cookies Esenciales (Técnicas): Son necesarias para el funcionamiento básico del sitio web. No se pueden desactivar.\n- Cookies de Preferencias: Permiten recordar información como el idioma seleccionado.\n- Cookies de Estadística: Nos ayudan a entender cómo los visitantes interactúan con la web (por ejemplo, Google Analytics).",
                    "3. Gestión de cookies\nPuede configurar su navegador para bloquear o alertar sobre estas cookies, pero algunas partes del sitio web no funcionarán. La mayoría de los navegadores permiten gestionar las preferencias de cookies a través de sus ajustes.",
                    "4. Cambios en la política\nPodemos actualizar esta política para reflejar cambios en las cookies que utilizamos o por motivos legales. Le recomendamos que consulte esta sección periódicamente."
                ],
                close: "Cerrar"
            },
            cookieBanner: {
                message: "Utilizamos cookies propias y de terceros para mejorar la experiencia del usuario y analizar el tráfico. Puedes aceptar solo las básicas o todas las cookies.",
                acceptBasic: "Aceptar básicas",
                acceptAll: "Aceptar todas",
                moreInfo: "Más información"
            }
        }
    },
    en: {
        title: "VandeCul — Documentary film studio and auteur fiction",
        description: "Documentary cinema and auteur fiction studio in Barcelona. We create audiovisual pieces for institutions, brands, and creators.",
        keywords: "documentary film studio, auteur fiction, Barcelona, audiovisual production, auteur cinema, institutional chronicle, docufiction",
        nav: {
            serveis: "SERVICES",
            projectes: "PROJECTS",
            proces: "PROCESS",
            contacte: "CONTACT",
            cta: "Request production"
        },
        hero: {
            label: "DOC.AUDIOVISUAL · 2026",
            h1: ["REALITY.", "FICTION.", "DOCUMENTARY"],
            valueProp: "Documentary cinema and auteur fiction for institutions, brands, and creators seeking to tell stories with depth.",
            summary: "We create auteur audiovisual pieces for associations, institutions, companies, and brands looking to document or relate a story with a creative vision.",
            ctaPrimary: "Start project",
            ctaSecondary: "Discover what we do"
        },
        marquee: "AUTEUR CINEMA ★ DOCUMENTAL ★ DOCUFICTION ★ INSTITUTIONAL CHRONICLE ★ BRAND STORIES ★ VISUAL RESEARCH ★ HISTORICAL LEGACY ★",
        serveis: {
            header: "// NARRATIVE STRUCTURES",
            h2: "Formats for thought, reality, memory, and imagination.",
            cards: [
                { title: "Documentary Film", desc: "Deep exploration of reality through an artistic and rigorous gaze, capturing the essence of the subject." },
                { title: "Docufiction", desc: "A hybrid between real testimony and narrative dramatization to enhance the emotional impact of truth." },
                { title: "Historical Chronicle", desc: "Preservation of institutional and civil legacy through archive research and contemporary editing." },
                { title: "Brand Documentary", desc: "Cinema that builds brand values through authenticity, moving away from conventional advertising." },
                { title: "Fiction Pieces", desc: "Creation of imaginary worlds under meticulous production and cutting-edge cinematography." },
                { title: "Visual Essay", desc: "Experimental visual research projects that question traditional cinematographic language." }
            ],
            cta: "Request budget"
        },
        projectes: {
            header: "// SELECTED PIECES",
            h2: "Visual Archive",
            stats: {
                records: "TOTAL_PIECES",
                year: "YEAR_INDEX"
            },
            ctaTrailer: "Watch trailer",
            ctaArchive: "View full archive"
        },
        proces: {
            header: "// WORKFLOW",
            h2: "The architecture behind the image.",
            steps: [
                { title: "Research and Script", desc: "We analyze the context, search for the soul of the story, and define a solid narrative structure before turning on the cameras. Documentary rigor and creative vision." },
                { title: "Production and Post-production", desc: "Rhythmic editing and assembly that prioritizes content, aesthetics, and narrative clarity." },
                { title: "Mastering and Delivery", desc: "Cinematographic color correction, immersive sound design, and export in archival formats for any platform or exhibition." }
            ],
            cta: "I want this process for my project"
        },
        clients: {
            header: "// CLIENTS",
            title: "Trusted by",
            testimonial: "The professionalism and artistic sensitivity of VandeCul elevated our project to a level we did not expect.",
            cite: "— Institutional client"
        },
        contacte: {
            header: "// CONTACT",
            h2: "Tell us your next story.",
            microCta: "We reply within 48h",
            labels: ["ADAPTED TO TECHNICAL SPECS", "PROPOSAL IN 48H", "ARCHIVAL QUALITY"],
            address: "C/ Calabria 163. Barcelona.",
            form: {
                nom: "Name or Organization",
                email: "Email address",
                genere: { label: "Genre / Format", placeholder: "Select..." },
                pressupost: { label: "Estimated budget", placeholder: "Select..." },
                objectiu: "Project objective",
                deadline: "Deadline / Timing",
                trucada: "I want a call",
                telefon: "Phone",
                placeholders: {
                    nom: "Enter here...",
                    email: "name@example.com",
                    objectiu: "Ex. Historical Archive",
                    deadline: "Ex. September 2026",
                    telefon: "+34 600 000 000"
                },
                submit: "Send Request",
                dossier: "Download dossier",
                footer: "What happens next? We will review your project and contact you within 48h with a personalized proposal."
            },
            success: {
                h3: "Request sent",
                p: "Thank you! We'll get in touch within 48h with a personalized proposal for your project.",
                cta: "Send another request"
            }
        },
        footer: {
            legal: ["Legal Notice", "Privacy", "Cookies"],
            rights: "© 2026 VandeCul CINEMA STUDIO. ALL RIGHTS RESERVED.",
            legalModal: {
                title: "LEGAL NOTICE",
                content: [
                    "In compliance with the information duty established by applicable regulations, we inform you that this website is owned by Marc Xicola, located at C/ Calabria 164, NIF/52172995W, with contact email VandeCul.produccions@gmail.com.",
                    "Access to and use of this website grant you the status of user and imply full and unreserved acceptance of the conditions set out in this Legal Notice. The user agrees to make appropriate use of the content and services offered by the owner through the website and not to use them for activities that are illegal or contrary to good faith and public order.",
                    "All content on this website, including texts, images, designs, logos, files, and any other material, is protected by the intellectual and industrial property rights of the owner or authorized third parties. Any reproduction, distribution, public communication, or total or partial transformation without the owner's prior written authorization is prohibited.",
                    "The owner is not responsible for damages or losses resulting from the improper use of the website, nor for the content of third parties accessible through external links. Likewise, the owner reserves the right to modify the information on the website at any time and without prior notice, as well as its configuration or presentation.",
                    "This Legal Notice is governed by Spanish law. For any controversy that may arise from access to or use of the website, the parties submit to the courts and tribunals that correspond according to the applicable regulations."
                ],
                close: "Close"
            },
            privacyModal: {
                title: "PRIVACY POLICY",
                content: [
                    "In compliance with Regulation (EU) 2016/679, of April 27, 2016, General Data Protection Regulation (GDPR), and Organic Law 3/2018, of December 5, on the protection of personal data and guarantee of digital rights, this privacy policy is provided.",
                    "1. Data Controller\nResponsible: Marc Xicola\nTax ID: 52172995W\nAddress: C/ Calabria 164\nEmail: vandecul.produccions@gmail.com\nWebsite: VandeCul.cat",
                    "2. Purpose of processing\nPersonal data collected through this website will be processed for the following purposes:\n- Addressing inquiries and requests received through contact forms.\n- Managing the commercial or professional relationship with users.\n- Sending informative or commercial communications, when prior consent has been given.\n- Complying with applicable legal obligations.",
                    "3. Legitimation\nThe legal basis for data processing is:\n- The consent of the data subject.\n- The execution of a contract or the application of pre-contractual measures.\n- Compliance with legal obligations.\n- Legitimate interest, where applicable.",
                    "4. Data retention\nData will be kept for the time necessary to fulfill the purpose for which it was collected and, subsequently, during the legally established periods. After these periods, it will be deleted with appropriate security measures.",
                    "5. Recipients\nData will not be transferred to third parties, except for legal obligations or when necessary for the provision of a service linked to the data controller. In these cases, only those third parties offering adequate guarantees in accordance with current regulations will be in charge of processing.",
                    "6. User rights\nThe user can exercise at any time the rights of access, rectification, deletion, opposition, limitation of processing, and data portability, as well as withdraw the consent granted, by writing to vandecul.produccions@gmail.com, attaching a copy of an identity document.\nLikewise, if you consider that the processing of your data does not comply with the regulations, you can file a complaint with the Catalan Data Protection Authority or the Spanish Data Protection Agency, as appropriate.",
                    "7. Security measures\nThe data controller adopts the necessary technical and organizational measures to guarantee the security, integrity, and confidentiality of personal data, and to prevent its loss, alteration, or unauthorized access.",
                    "8. Changes to the privacy policy\nThis privacy policy may be updated at any time to adapt it to legal or technical modifications. It is recommended to review it periodically."
                ],
                close: "Close"
            },
            cookiesModal: {
                title: "COOKIES POLICY",
                content: [
                    "This website uses cookies and similar technologies to ensure the technical functioning of the site, analyze traffic, and improve the user experience.",
                    "1. What are cookies?\nCookies are small text files stored on your device when you visit a website. They are used to recognize the user, store preferences, and provide more efficient navigation.",
                    "2. Types of cookies we use\n- Essential Cookies (Technical): Necessary for the basic functioning of the website. They cannot be deactivated.\n- Preference Cookies: Allow the site to remember information like the selected language.\n- Statistics Cookies: Help us understand how visitors interact with the site (e.g., Google Analytics).",
                    "3. Cookie management\nYou can configure your browser to block or alert you about these cookies, but some parts of the website may not work. Most browsers allow you to manage cookie preferences through their settings.",
                    "4. Changes to policy\nWe may update this policy to reflect changes in the cookies we use or for legal reasons. We recommend checking this section periodically."
                ],
                close: "Close"
            },
            cookieBanner: {
                message: "We use our own and third-party cookies to improve the user experience and analyze traffic. You can accept only the basic ones or all cookies.",
                acceptBasic: "Accept basic",
                acceptAll: "Accept all",
                moreInfo: "More information"
            }
        }
    }
};
