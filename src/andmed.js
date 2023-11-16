import piltRehepapp from './pix/rehepapp.jpg'
import piltEestlase from './pix/eestlase.jpg'
import piltJaanus from './pix/jaanus.jpg'

const RAAMATUD = [
    {
        id: 0,
        pealkiri: 'Rehepapp',
        autor: 'Andrus Kivirähk',
        aasta: '2000',
        kirjeldus: 'Romaan eesti rahva raskest elust mõisahärrade rõhumise all. Rängas olukorras ei jää rahval muud üle, kui krabada endale kõike mida kätte saab, olgu siis naabri sahvrist, mõisaaiast või teede ristmikul vanakurja käest. Loomulikult on mängus ka kõiksugused kratid, tondid ja kollid, kes varitsevad põõsas, silmad põlemas, et paljukannatanud külainimestele veelgi kurja teha.',
        pilt: piltRehepapp
    },
    {
        id: 1,
        pealkiri: 'Eestlase käsiraamat',
        autor: 'Mihkel Raud',
        aasta: '2017',
        kirjeldus: '100 asja, mida õige eestlane teeb. Kes on õige eestlane? Sellele küsimusele on vastuseid otsitud aastasadu, kuid ilmeksimatut viisi "tõelise eestlase" väljaselgitamiseks pole siiani leitud. Nüüd on see lõpuks olemas! "Eestlase käsiraamatust" leiad täpselt sada asja, mida iga õige eestlane teeb. Oled sa Lembitu soo vääriline või kannatasid su esivanemad ilma asjata? Hakka lugema ja saad teada.',
        pilt: piltEestlase
    },
    {
        id: 2,
        pealkiri: 'Jaanus Nõgisto',
        autor: 'Tiina Lang',
        aasta: '2016',
        kirjeldus: 'Jaanus Nõgisto – muusika, endise rokkansambli Ruja kitarrist, telerežissöör, purjetaja, kes 60aastasena on pisut rahunenud, ent endiselt kuraasikalt mitmekülgne nagu teismelisena.        13aastaselt tuli Jaanus esimese eestlasena Nõukogude Liidu meistriks. «Mul kohutavalt vedas!» Purjetamine oli talle maailma kõige olulisem asi, kuni ühel hetkel ta tüdines. ',
        pilt: piltJaanus
    },
]

export { RAAMATUD };