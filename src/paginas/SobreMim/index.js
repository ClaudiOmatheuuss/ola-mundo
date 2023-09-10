import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o <a href="https://claudiomatheuuss.github.io/portfolio/" target="_blank">Claudio Matheus</a>!
            </h3>

            <a href="https://claudiomatheuuss.github.io/portfolio/" target="_blank">    
                <img
                    src={fotoSobreMim}
                    alt="Foto do Claudio Matheus"
                    className={styles.fotoSobreMim}
                />
            </a>

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou estudade de Front-end na Alura, formado em Técnico de Desenvolvimento de Sistemas pela ETEEMM e estudante de Engenharia pela UFRPE e estou feliz de te ver por aqui.
            </p>

            <p className={styles.paragrafo}>
                Tive minhas primeiras curiosidades sobre esse mundo da tecnologia já na minha infância onde na epóca de 2012 quando tinha meus 8 anos ganhei dos meus pais um Polystation, sim aquele vídeo-game que talvez você também ia na feira buscar uma daquelas fitas com vários jogos. O meu jogo favorito era o do Duck-hunt eu ficava fascinado sempre que jogava e fui me interessando cada dia mais pela área de tecnologia.
            </p>

            <p className={styles.paragrafo}>
                Mas a minha história com programação só começou aos meus 15 anos na Escola Técnica Estadual Professor Edson Mororó Moura(ETEEMM), quando fiz o ensino médio integrado ao curso técnico de Análise e Desenvolvimento de Sistemas. Eu aprendi lógica de programação e o básico de várias linguagens, como Pascal, C++, e Java, mas sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação, uma vez que, desde criança tive contato com a tecnologia e tinha bastante curiosidade sobre como funcionava esse mundo dos jogos eletrônicos, aplicações-web e aplicativos em geral.
            </p>

            <p className={styles.paragrafo}>
                Estou cursando ensino superior, escolhi cursar Engenharia na Universidade Federal Rural de Pernambuco (UFRPE). Ademais, aliando minha curiosidade, vontade de crescer e paixão pela tecnologia sigo focado em estudar por fora para desenvolver minhas habilidades nas linguagens de programação em específico na minha stack: Front-end e para me ajudar em meu desenvolvimento na área me inscrevi no programa Oracle Next Education(ONE) onde por meio de processos seletivos hoje sou estudante bolsista na Alura. 
            </p>

            <p className={styles.paragrafo}>
                Com isso tenho tido minha experiência de dev mais próxima da realidade, com prazos de implementação dos desafios(challenges) propostos durante o curso, e aprendi muito enquanto codificava. Seja errando ou acertando, cada challenge e site desenvolvido durante os cursos e etapas do programa influenciaram imensamente em meu conhecimento na área você pode acessar meu Portfolio clicando em minha foto ou em meu nome no titulo dessa seção Sobre mim para conferir minhas redes e projetos feitos/em andamento.
            </p>

            <p className={styles.paragrafo}>
                Desde então, tem sido apenas aprendizados atrás de aprendizados. A Alura é uma escola não só para seus alunos e alunas, mas também para os colaboradores e colaboradoras. Hoje sou muito feliz de ter a oportunidade de adquirir e em seguida trazer esses conteúdos encantadores para você. Espero que aprenda bastante!   : )
            </p>
            
        </PostModelo>
    )
}