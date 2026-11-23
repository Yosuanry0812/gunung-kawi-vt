// Ringkasan dari BPCB Bali, Dinas Pariwisata Gianyar, Archaeology Magazine, dan Wikipedia (lihat sources.ts).
// Tafsiran tokoh dan fungsi candi dinyatakan sebagai tafsiran; tidak ada tahun yang dipastikan melebihi sumber.
export type HistoryImage =
  "historyTemples" | "historyNiches" | "history" | "historyWorship";
export const historyRows: {
  image: HistoryImage;
  sections: Record<"id" | "en", { title: string; text: string }[]>;
}[] = [
  {
    image: "historyTemples",
    sections: {
      id: [
        {
          title: "Candi yang dipahat pada tebing",
          text: "Gunung Kawi terletak di tepi Sungai Pakerisan, Banjar Penaka, Desa Tampaksiring, Kabupaten Gianyar. Berbeda dari candi pada umumnya yang disusun dari bata atau batu, bangunan di sini dipahat langsung pada dinding tebing padas. Setiap candi berada dalam ceruk melengkung, yang juga melindunginya dari erosi.",
        },
        {
          title: "Dua kelompok di kedua sisi sungai",
          text: "Sungai Pakerisan membelah kawasan menjadi dua. Empat candi berada di sisi barat dan menghadap ke timur, sedangkan lima candi di sisi timur menghadap ke barat. Satu candi lagi berdiri terpisah dan oleh para ahli disebut makam kesepuluh. Kawasan ini dikenal pula sebagai Lembah Raja-raja Bali.",
        },
      ],
      en: [
        {
          title: "Shrines carved into a cliff",
          text: "Gunung Kawi stands on the Pakerisan River in Banjar Penaka, Tampaksiring Village, Gianyar Regency. Unlike most temples, which are built from brick or stone blocks, these monuments are cut directly into the sandstone cliff. Each candi sits in an arched niche that also shelters it from erosion.",
        },
        {
          title: "Two groups on either side of the river",
          text: "The Pakerisan River divides the site in two. Four candi stand on the west bank facing east, and five on the east bank facing west. A tenth candi stands apart and is called the tenth tomb by scholars. The site is also known as the Valley of the Balinese Kings.",
        },
      ],
    },
  },
  {
    image: "historyNiches",
    sections: {
      id: [
        {
          title: "Dibangun pada abad ke-11",
          text: "Kompleks ini umumnya dikaitkan dengan abad ke-11 Masehi, pada masa Dinasti Warmadewa di Bali, antara pemerintahan Raja Udayana dan putranya, Anak Wungsu. Anak Wungsu memerintah sekitar tahun 1049 hingga 1077 Masehi.",
        },
        {
          title: "Untuk siapa candi ini dibuat",
          text: "Para peneliti belum sepakat. Satu tafsiran menyebut lima candi di timur sebagai penghormatan bagi Udayana, permaisurinya Mahendradatta, serta putra-putranya Airlangga, Anak Wungsu, dan Marakata, sedangkan empat candi di barat bagi para selir. Tafsiran lain menilai kompleks ini dibuat untuk memperingati Anak Wungsu yang wafat sekitar 1077, bersama keluarga dan istri-istrinya. Tidak ada tafsiran yang menetapkan tokoh pada setiap candi secara pasti.",
        },
      ],
      en: [
        {
          title: "Built in the eleventh century",
          text: "The complex is generally dated to the eleventh century CE, under the Warmadewa dynasty of Bali, between the reigns of King Udayana and his son Anak Wungsu. Anak Wungsu ruled from about 1049 to 1077 CE.",
        },
        {
          title: "Who the shrines were made for",
          text: "Scholars do not agree. One interpretation reads the five eastern candi as honouring Udayana, his queen Mahendradatta, and their sons Airlangga, Anak Wungsu, and Marakata, with the four western candi for minor queens. Another holds that the complex commemorates Anak Wungsu, who died around 1077, together with his family and wives. Neither interpretation settles who each individual candi belongs to.",
        },
      ],
    },
  },
  {
    image: "history",
    sections: {
      id: [
        {
          title: "Tulisan pada candi",
          text: "Pada pintu semu salah satu candi terdapat tulisan beraksara Kediri berbunyi haji lumah ing jalu, yang ditafsirkan sebagai raja yang disemayamkan di Jalu. Kata jalu berarti taji ayam jantan dan dapat dihubungkan dengan keris atau Pakerisan, nama sungai di lokasi ini. Candi kesepuluh memuat tulisan rakryan, gelar pejabat tinggi kerajaan.",
        },
        {
          title: "Ruang pertapaan",
          text: "Di sisi barat sungai terdapat wihara berupa ruang pertapaan yang dipahat ke dalam tebing, lengkap dengan halaman, bilik kecil berjendela, dan lubang udara pada atapnya. Ruang ini diperkirakan dipakai untuk bermeditasi atau pertemuan para pendeta. Di arah tenggara, melewati persawahan, ada ceruk pertapaan dan satu wihara yang tampaknya belum selesai dikerjakan.",
        },
      ],
      en: [
        {
          title: "Inscriptions on the shrines",
          text: "A false door on one of the candi bears an inscription in Kediri script reading haji lumah ing jalu, interpreted as the king who is laid to rest at Jalu. Jalu means a rooster's spur and can be linked to the keris or Pakerisan, the name of the river here. The tenth candi carries the word rakryan, the title of a high royal official.",
        },
        {
          title: "Hermitage chambers",
          text: "West of the river a hermitage, or wihara, is cut into the cliff, with a courtyard, small rooms with windows, and ventilation holes in the roof. The rooms are thought to have served for meditation or for gatherings of priests. To the southeast, beyond the rice fields, lie more meditation niches and a wihara that appears never to have been finished.",
        },
      ],
    },
  },
  {
    image: "historyWorship",
    sections: {
      id: [
        {
          title: "Ditemukan kembali dan cerita rakyat",
          text: "Situs ini dicatat kembali oleh peneliti Belanda sekitar tahun 1920. Masyarakat setempat juga mengenal cerita bahwa candi ini dipahat oleh Kebo Iwa, tokoh sakti yang mengukir tebing dengan kuku-kukunya dalam satu malam. Kisah itu legenda dan bukan catatan sejarah.",
        },
        {
          title: "Tempat yang masih dipakai bersembahyang",
          text: "Air dari pancuran dan aliran Pakerisan dianggap suci. Hingga kini kawasan ini dipakai untuk upacara dan persembahyangan, sehingga pengunjung diminta berpakaian sopan, menjaga ketenangan, dan tidak naik ke bangunan.",
        },
      ],
      en: [
        {
          title: "Rediscovery and folklore",
          text: "Dutch researchers recorded the site again around 1920. Local people also tell of Kebo Iwa, a figure of great power who is said to have carved the cliff with his fingernails in a single night. That story is a legend, not a historical record.",
        },
        {
          title: "A place still used for worship",
          text: "Water from the spouts and the Pakerisan is regarded as sacred. Ceremonies and prayers still take place here, so visitors are asked to dress modestly, keep quiet, and stay off the structures.",
        },
      ],
    },
  },
];
