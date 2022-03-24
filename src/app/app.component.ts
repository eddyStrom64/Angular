import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';

  data:any[] = [
    {
      title: "Título 1",
      descripcion: "Description 1",
      urlImage: "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg"
    },
    {
      title: "Título 2",
      description: "Description 2",
      urlImage: "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg"
    },
    {
      title: "Título 3",
      description: "Description 3",
      urlImage: "https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800"
    },
    {
      title: "Título 4",
      description: "Description 4",
      urlImage: "https://cnnespanol.cnn.com/wp-content/uploads/2019/12/s_64a163f16ecbb099e52f2f8271f73cbbfcfc9034be4d646f7375e4db1ca6f3d7_1573501883482_ap_19001106049831-1.jpg?quality=100&strip=info&w=320&h=240&crop=1"
    },
    {
      title: "Título 5",
      description: "Description 5",
      urlImage: "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg"
    },
    {
      title: "Título 6",
      description: "Description 6",
      urlImage: "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg"
    }
  ];
}
