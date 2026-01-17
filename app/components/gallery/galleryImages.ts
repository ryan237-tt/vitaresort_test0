export type GalleryImage = {
  src: string;
  alt: string;
  category:
    | "Rooms"
    | "Kitchen"
    | "Facade"
    | "Gym"
    | "Living Room";
};

export const galleryImages: GalleryImage[] = [
  // ================= ROOMS =================
  { src: "https://res.cloudinary.com/divylndt3/image/upload/v1768608535/IMG_2455_cdrfiw.jpg", alt: "Luxury bedroom with forest view", category: "Rooms" },
  { src: "https://res.cloudinary.com/divylndt3/image/upload/v1768608533/IMG_2473_kfjidt.jpg", alt: "Elegant bedroom interior with warm lighting", category: "Rooms" },
  { src: "https://res.cloudinary.com/divylndt3/image/upload/v1768608522/IMG_2466_wvavs4.jpg", alt: "Modern bedroom with premium finishes", category: "Rooms" },
  { src: "https://res.cloudinary.com/divylndt3/image/upload/v1768608530/IMG_2470_pmf5nu.jpg", alt: "Spacious bedroom with refined materials", category: "Rooms" },
  { src: "https://res.cloudinary.com/divylndt3/image/upload/v1768608519/IMG_2459_lgwok8.jpg", alt: "Bedroom detail with indirect lighting", category: "Rooms" },
  { src: "https://res.cloudinary.com/divylndt3/image/upload/v1768608514/IMG_2456_mjqbmh.jpg", alt: "Minimalist luxury bedroom ambiance", category: "Rooms" },
  { src: "https://res.cloudinary.com/divylndt3/image/upload/v1768608515/IMG_2458_cg3zni.jpg", alt: "High-end bedroom design detail", category: "Rooms" },
  { src: "https://res.cloudinary.com/divylndt3/image/upload/v1768608510/IMG_2446_zjfp66.jpg", alt: "Bedroom view with warm evening atmosphere", category: "Rooms" },
  { src: "https://res.cloudinary.com/divylndt3/image/upload/v1768608532/IMG_2471_dcjtzt.jpg", alt: "Luxury suite bedroom overview", category: "Rooms" },

  // ================= KITCHEN =================
  { src: "https://res.cloudinary.com/divylndt3/image/upload/v1768608549/IMG_2405_ntjkko.jpg", alt: "Fully equipped luxury kitchen", category: "Kitchen" },
  { src: "https://res.cloudinary.com/divylndt3/image/upload/v1768608548/IMG_2404_nha3av.jpg", alt: "Modern kitchen with premium appliances", category: "Kitchen" },
  { src: "https://res.cloudinary.com/divylndt3/image/upload/v1768608544/IMG_2407_rqatud.jpg", alt: "Kitchen workspace with elegant finishes", category: "Kitchen" },
  { src: "https://res.cloudinary.com/divylndt3/image/upload/v1768608543/IMG_2406_jt28s4.jpg", alt: "Kitchen interior with soft ambient lighting", category: "Kitchen" },
  { src: "https://res.cloudinary.com/divylndt3/image/upload/v1768608335/IMG_2405_ira9al.jpg", alt: "Kitchen detail and countertop design", category: "Kitchen" },
  { src: "https://res.cloudinary.com/divylndt3/image/upload/v1768608333/IMG_2404_nruzaf.jpg", alt: "Premium kitchen layout", category: "Kitchen" },

  // ================= FACADE =================
  { src: "https://res.cloudinary.com/divylndt3/image/upload/v1768608564/IMG_2374_icas4o.jpg", alt: "Vita Resort facade illuminated at night", category: "Facade" },
  { src: "https://res.cloudinary.com/divylndt3/image/upload/v1768608564/IMG_2494_mhovir.jpg", alt: "Vita Resort exterior night view", category: "Facade" },
  { src: "https://res.cloudinary.com/divylndt3/image/upload/v1768608562/IMG_2489_dl6bxc.jpg", alt: "Architectural facade with LED lighting", category: "Facade" },
  { src: "https://res.cloudinary.com/divylndt3/image/upload/v1768608561/IMG_2492_okzxz2.jpg", alt: "Luxury facade design detail", category: "Facade" },
  { src: "https://res.cloudinary.com/divylndt3/image/upload/v1768608559/IMG_2378_ms6ttp.jpg", alt: "Vita Resort surrounded by forest", category: "Facade" },
  { src: "https://res.cloudinary.com/divylndt3/image/upload/v1768608556/IMG_2493_trhgui.jpg", alt: "Resort exterior at dusk", category: "Facade" },

  // ================= GYM =================
  { src: "https://res.cloudinary.com/divylndt3/image/upload/v1768608576/IMG_2397_isoyo0.jpg", alt: "Private gym with modern equipment", category: "Gym" },
  { src: "https://res.cloudinary.com/divylndt3/image/upload/v1768608574/IMG_2395_nfv1rc.jpg", alt: "Fitness room interior", category: "Gym" },
  { src: "https://res.cloudinary.com/divylndt3/image/upload/v1768608572/IMG_2398_vv43vh.jpg", alt: "Gym training area", category: "Gym" },
  { src: "https://res.cloudinary.com/divylndt3/image/upload/v1768608571/IMG_2396_ca4aur.jpg", alt: "Private workout space", category: "Gym" },
  { src: "https://res.cloudinary.com/divylndt3/image/upload/v1768608571/IMG_2393_j9bnlr.jpg", alt: "Gym equipment detail", category: "Gym" },

  // ================= LIVING ROOM =================
  { src: "https://res.cloudinary.com/divylndt3/image/upload/v1768608976/IMG_2421_cwboqu.jpg", alt: "Luxury living room with modern design", category: "Living Room" },
  { src: "https://res.cloudinary.com/divylndt3/image/upload/v1768608975/IMG_2420_icimu2.jpg", alt: "Living room seating area", category: "Living Room" },
  { src: "https://res.cloudinary.com/divylndt3/image/upload/v1768608974/IMG_2427_w48jmt.jpg", alt: "Spacious living room interior", category: "Living Room" },
  { src: "https://res.cloudinary.com/divylndt3/image/upload/v1768608973/IMG_2425_likunz.jpg", alt: "Living room with ambient lighting", category: "Living Room" },
  { src: "https://res.cloudinary.com/divylndt3/image/upload/v1768608972/IMG_2418_yj1ddu.jpg", alt: "Luxury lounge area", category: "Living Room" },
  { src: "https://res.cloudinary.com/divylndt3/image/upload/v1768608972/IMG_2429_i9wxgj.jpg", alt: "Living room design details", category: "Living Room" },
  { src: "https://res.cloudinary.com/divylndt3/image/upload/v1768608966/IMG_2431_y7xngz.jpg", alt: "Open living space overview", category: "Living Room" },
  { src: "https://res.cloudinary.com/divylndt3/image/upload/v1768608964/IMG_2417_vbieyb.jpg", alt: "Premium living room atmosphere", category: "Living Room" },
];
