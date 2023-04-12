import React, { Component } from "react";
import BlogItem from "./BlogItem";

export class Blog extends Component {
  articles = [
    {
      source: { id: "news24", name: "News24" },
      author: "Compiled by Jenni Evans",
      title:
        "'Strong indications that criminality played a role here': Tshwane pylon collapse linked to crime",
      description:
        "Criminality was the likely cause of the collapse of seven pylons, which supported 132kV powerlines, on the N4 in Pretoria, according to City of Tshwane Mayor Cilliers Brink.",
      url: "https://www.news24.com/news24/southafrica/news/strong-indications-that-criminality-played-a-role-here-tshwane-pylon-collapse-linked-to-crime-20230411",
      urlToImage:
        "https://cdn.24.co.za/files/Cms/General/d/7110/c9a64acdbbcc4f6db5228c6b44c4048d.jpg",
      publishedAt: "2023-04-11T08:51:06+00:00",
      content:
        "<ul><li>The seven-pylon collapse in Pretoria was likely caused by criminality, according to the Tshwane mayor.</li><li>Repairs are under way, but it will be a long process.</li><li>Many of the City's… [+1108 chars]",
    },
    {
      source: { id: "breitbart-news", name: "Breitbart News" },
      author: "Ashley Oliver",
      title: "Democrats Fume over GOP Setting Crime Hearing in Manhattan",
      description:
        "New York Democrats raged over House Judiciary Committee Republicans announcing they had scheduled an official committee hearing in Manhattan.",
      url: "http://www.breitbart.com/politics/2023/04/10/democrats-fume-gop-setting-crime-hearing-manhattan-nyc-safest-big-city-america/",
      urlToImage:
        "https://media.breitbart.com/media/2022/08/Redistricting-New-York-640x335.jpg",
      publishedAt: "2023-04-11T03:21:22Z",
      content:
        "New York Democrats raged over House Judiciary Committee Republicans announcing Monday that they had scheduled an official committee hearing next week in New York City focused on “victims of violent c… [+3528 chars]",
    },
    {
      source: { id: "la-gaceta", name: "La Gaceta" },
      author: "La Gaceta",
      title: "Caso Mariotti: Gordillo no logró despegar a Salis del crimen",
      description:
        "Con la confesión del imputado se atenuó la acusación contra Morán, Escudero y Manrique; pero la fiscal duda de que haya cometido solo el asesinato",
      url: "https://www.lagaceta.com.ar/nota/986886/seguridad/caso-mariotti-gordillo-no-logro-despegar-salis-crimen.html",
      urlToImage:
        "https://img.lagaceta.com.ar/fotos/notas/2023/04/11/986886_202304102230310000001.jpg",
      publishedAt: "2023-04-11T03:07:20.1639078Z",
      content: null,
    },
    {
      source: { id: "la-nacion", name: "La Nacion" },
      author: null,
      title:
        "Crimen y misterio en Retiro: cuál es la “lesión 18″ que probaría que la modelo brasileña fue asesinada",
      description:
        "La semana próxima se definiría la situación procesal de Francisco Sáenz Valiente, el empresario detenido e imputado de homicidio",
      url: "http://www.lanacion.com.ar/seguridad/crimen-y-misterio-en-retiro-cual-es-la-lesion-18-de-la-autopsia-que-demostraria-que-la-joven-nid10042023/",
      urlToImage:
        "https://resizer.glanacion.com/resizer/v2/emmily-rodrigues-santos-tenia-26-E2BO7DUMJJBD7A4KBNQI6POBCQ.jpg?auth=b6f2d973c5343ec2afff929f32d0683ec189f2d05adee3be58db16cb269712e1&width=768&quality=80&smart=false",
      publishedAt: "2023-04-10T18:49:49.249Z",
      content:
        "Emmily Rodrigues Santos Gomes tenía 26 años, era modelo y quería, en un futuro, abrir un centro de estética. Murió cuando cayó al vacío desde un departamento de un sexto piso de un edificio de Retiro… [+1919 chars]",
    },
    {
      source: { id: "blasting-news-br", name: "Blasting News (BR)" },
      author: "Felipe Cherque (VB)",
      title:
        "'Fantástico' denuncia novo golpe do consignado, com venda de dados pessoais",
      description:
        "Compra de dados sigilosos pela internet e oferta de serviços de desbloqueio e reset de senha facilitam prática de crimes.",
      url: "https://br.blastingnews.com/brasil/2023/04/fantastico-denuncia-novo-golpe-do-consignado-com-venda-de-dados-pessoais-003674571.html",
      urlToImage:
        "https://staticr1.blastingcdn.com/media/photogallery/2023/4/10/os/b_1200x630x82/aplicativo-meu-inss-divulgacaoinss_2907253.jpg",
      publishedAt: "2023-04-10T11:28:42Z",
      content:
        'Crimes envolvendo empréstimos consignados de aposentados têm sido cada vez mais sofisticados. E esse foi tema de uma reportagem do "Fantástico", da TV Globo, neste domingo (09). Quadrilhas especializ… [+2165 chars]',
    },
    {
      source: { id: "time", name: "Time" },
      author: "Simon Shuster/Kyiv",
      title: "Inside Ukraine's Push to Try Putin for War Crimes",
      description:
        "As the war drags on and evidence of atrocities mount, Ukraine seeks international justice.",
      url: "http://time.com/6266991/ukraine-push-putin-war-crimes/",
      urlToImage:
        "https://api.time.com/wp-content/uploads/2023/03/war-crimes-tribunal-putin-ukraine-05.jpg?quality=85&w=1200&h=628&crop=1",
      publishedAt: "2023-03-30T11:00:46Z",
      content:
        "In the office of Andriy Smyrnov, the deputy head of Ukraine’s presidential administration, the wanted posters spread across the desk serve as a kind of mission statement. They show the faces of five … [+10212 chars]",
    },
    {
      source: { id: "the-jerusalem-post", name: "The Jerusalem Post" },
      author: null,
      title: "Congresswoman Nita Lowey: I am proud to stand with Israel",
      description:
        "Gantz: Security of Israel is above politics; PA: This is a crime.",
      url: "https://www.jpost.com/Arab-Israeli-Conflict/Gantz-Security-of-Israel-is-above-politics-Palestinians-This-is-a-crime-607595",
      urlToImage:
        "https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/448812",
      publishedAt: "2019-11-13T04:41:00Z",
      content:
        "US Ambassador David M. Friedman said the US stands “with our friend and ally Israel at this critical moment” on social media on Tuesday after roughly 170 rockets were fired on Israel from the Gaza St… [+6160 chars]",
    },
  ];

  constructor() {
    super();
    console.log("I am constructor");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h2>Wanna read interesting blogs? </h2>

        <div className="row">
          {this.state.articles.map((article) => {
            return (
              <div className="col-md-4" key={article.url}>
                <BlogItem
                  title={article.title.slice(0,45)}
                  description={article.description.slice(0,88)}
                  imageUrl={article.urlToImage}
                  blogUrl={article.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Blog;
