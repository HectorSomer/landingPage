import Album from "../components/molecules/Album/Album";

const dates={
   albums :[
    {
        image:"Twenty One Pilots Homónimo.jpg",
        text:"Twenty One pilos el Auto titulado, también conocido como Self Titled, es el primer albúm de Twenty One Pilots, estrenado el 29 de diciembre del año 2009, este albúm varía de generos, ronda principalmente entre rock alternativo e indie pop, considero que es un albúm bastante oscuro en comparación a sus estilos posteriores, para mí, Air Catcher es la mejor canción de este albúm, en este albúm; habían 3 integrantes en la banda los cuales son: Nick Thomas, Chris Salih y Tyler Joseph siendo este último el lider de la banda"
    },
    {
        image:"Regional At Best.jpg",
        text:"Regional At Best es el segundo albúm de Twenty One Pilots, lamentablemente para este albúm, Nick Thomas y Chris Salih abandonaron la banda :(, pero uno de los ex integrantes de la banda le presentó a Josh Dun a Tyler Joseph, posterior a esto, Tyler le propuso a Josh Dun formar parte de la banda como el baterista y es ahí donde Josh Dun Ingresa a la banda, desde Regional At Best. Regional At Best fue lanzado el día 11 de Junio de 2011, considero que la mejor canción de este albúm es Clear"
    },
    {
        image:"Vessel.jpg",
        text:"Vessel es el tercer albúm de Twenty One Pilots, y el primer albúm de estudio, para este momento estaban en convenio con Fueled By Ramen, una disquera muy popular, este albúm fue lanzado el día 8 de enero 2013, en este albúm lograron tener su primer éxito dentro del país el cual fue Car Radio y desde ese momento empezaron a lanzarse a la fama, este albúm tienes estilos más electropop que lo demás, y en mi opinión, la mejor canción del albúm es Holding on to You, y a su vez la mejor canción de la banda para mí"
    },
    {
      image:"Blurryface.jpg",
      text:"Blurryface es el cuarto albúm de Twenty One Pilots y el segundo albúm de estudio de esta banda, es el albúm de la banda que más records ha batido, y es considerado uno de los mejores albums de rock alternativo, este albúm fue lanzado el día 17 de mayo de 2015, teniendo 2 grandes éxitos a nivel mundial, los cuales son Stressed Out, el más grande éxito y Ride, fue el primer albúm con todas las canciones certificadas en oro, es un albúm que ronda entre los generos de hip hop, rock alternativo, pop y reggae, en mi opinión, la mejor canción de este albúm es Message Man"
    },
    {
        image:"Trench.jpg",
        text:"Trench es el quinto albúm de Twenty One Pilots y el tercer albúm de estudio, este albúm fue lanzado el día 5 de octubre de 2018, siendo otro albúm bastante éxitoso de Twenty One Pilots, la canción más popular de este albúm es Chlorine, de hecho este también es un hit a nivel mundial, y es una canción muy conocida y querida de ellos, en mi opinión, la mejor canción de este albúm es Nico and the Niners, desde este albúm, Twenty One Pilots relata a mucha profundidad lo que es la historia detrás de sus canciones, siendo Blurryface el antagonista de esta historia y nanrrando a los 9 obispos de lo que va de esta historia, además de que nos cuenta un poco quienes son los banditos y quién es Clancy"
    },
    {
        image:"Scaled and Icy.jpg",
        text:"Scaled and Icy es el sexto albúm de Twenty One Pilots, siendo este el tercer albúm de estudio de la banda, ronda principalemnte en el genero rock alternativo y pop rock, tiene muchas vibras animadas y canciones con rock, saliendose del estilo oscuro que antes tenía Twenty One Pilots, claro, sin dejar de ser un excelente albúm, nos relata la historia de Ned, más que nada, y nos presenta más el personaje de Clancy además de que detalla más a profundidad la historia con canciones como: The Outside y Saturday, este albúm fue lanzado el día 21 de mayo de 2021, para mí, la mejor canción de este albúm es Never Take It"
    },
    {
        image:"Clancy.jpg",
        text:"Clancy será el séptimo albúm de Twenty One Pilots, este será el cuarto albúm de estudio de la banda, de este han salido ya 3 sencillos: Overcompensate, Next Semester y Backslide, en la canción Overcompensate, se nos cuenta de manera más directa el lore de Twenty One Pilots en la ciudad de Dema, nos dice directamente quién es Clancy, y nos habla de Josh Dun como parte de la historia, este albíum será estrenado el día 24 de mayo de 2024, de las canciones que han salido, mi favorita es Next Semester, que tiene un estilo rockero tipo post-punk, Overcompensate tiene un estilo de rap y Backslide me suena más a electro, espero con ansias este albúm y le tengo mucha fe"
    }
   ],
   tracklist:[
    {
    album:"Twenty One Pilots",
    ruta:"Twenty One Pilots Homónimo.jpg",
    track:["Implicit Demand For Proof", "Fall Away", "The Pantaloon", "Addict With A Pen", "Friend, please", "March To The Sea", "Johnny Boy", "Oh Ms. Believer", "Air Catcher", "Trapdoor", "A Car, A Torch, A Death", "Taxi Cab", "Before You Start Your Day"]
   },
   {
    album:"Regional At Best",
    ruta:"Regional At Best.jpg",
    track:["Guns for Hands", "Holding on to You","Ode to Sleep", "Slowton", "Car Radio", "Forest", "Glowing Eyes", "Kitchen Sink", "Anathema","Lovely", "Ruby", "Tress", "Be Concerned", "Clear"]
   },
   {
    album:"Vessel",
    ruta: "Vessel.jpg",
    track:["Ode to Sleep", "Holding on to You", "Migraine","House of Gold", "Car Radio", "Semi-Automatic", "Screen", "The Run and Go", "Fake You Out", "Guns for Hands", "Tress", "Truce"]
   },
   {
    album:"Blurryface",
    ruta:"Blurryface.jpg",
    track:["Heavydirtysoult", "Stressed Out", "Ride", "Fairly Local", "Tear in My Heart", "Lane Boy", "The Judge", "Doubt","Polarize", "We Don't Believe What's on TV", "Message Man", "Hometown", "Not Today", "Goner" ]
   },
   {
    album:"Trench",
    ruta:"Trench.jpg",
    track:["Jumpsuit", "Levitate","Morph", "My Blood", "Neon Gravestones", "The Hype", "Nico and the Niners", "Cut My Lip", "Bandito", "Pet Cheetah", "Legend", "Leave the City"]
   },
   {
    album:"Scaled and Icy",
    ruta:"Scaled and Icy.jpg",
    track:["Good Day", "Choker", "Shy Away", "The Outside", "Saturday", "Never Take It", "Mulberry Street", "Formidable", "Bounce Man", "No Chances", "Redecorate"]
   }, 
   {
    album: "Clancy", 
    ruta:"Clancy.jpg",
    track:["Overcompensate", "Next Semester", "Backslide", "Midwest Indigo", "Routines in the Night", "Vignette", "The Craving", "Lavish", "Navigating", "Snap Back", "Oldies Station", "At the Risk of Feelinng Dumb", "Paladin Strait"]
   }
   ]
}
export default dates;
