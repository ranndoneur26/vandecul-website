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
            legal: ["Avís Legal", "Privacitat", "Cookies", "Presskit"],
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
            legal: ["Aviso Legal", "Privacidad", "Cookies", "Presskit"],
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
            legal: ["Legal Notice", "Privacy", "Cookies", "Presskit"],
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
            }
        }
    }
};
