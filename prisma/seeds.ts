import { prisma } from "../src/lib/prisma"

const snacks = [
  {
    name_icon: "lingerie",
    name: "Fantasia mini Bandida Sensual Tam. U",
    description: "",
    price: 92,
    image: "https://thumbs2.imgbox.com/11/79/Y8LGc5GI_t.png"
  },
  {
    name_icon: "lingerie",
    name: "Fantasia mini escrava do prazer Tam. U",
    description: "",
    price: 0,
    image: "https://thumbs2.imgbox.com/14/3c/OdU10kYe_t.png"
  },
  {
    name_icon: "lingerie",
    name: "Fantasia enfermeira sexual Tam. U",
    description: "",
    price: 0,
    image: "https://thumbs2.imgbox.com/8b/df/yjCsqua3_t.png"
  },
  {
    name_icon: "lingerie",
    name: "Fantasia mini Policial Americana Tam. U",
    description: "",
    price: 57,
    image: "https://thumbs2.imgbox.com/85/ac/mX6LX1SM_t.png"
  },
  {
    name_icon: "lingerie",
    name: "Fantasia mini marinheira Tam. U",
    description: "",
    price: 0,
    image: "https://thumbs2.imgbox.com/5b/93/E6Jbsk0j_t.png"
  },
  {
    name_icon: "lingerie",
    name: "Fantasia mini garota veneno Tam. U",
    description: "",
    price: 50,
    image: "https://thumbs2.imgbox.com/60/77/reTzt96j_t.png"
  },
  {
    name_icon: "lingerie",
    name: "Fantasia Chapeuzinho Vermelho Tam. U",
    description: "",
    price: 50,
    image: "https://thumbs2.imgbox.com/27/c5/f1wnVgas_t.png"
  },
  {
    name_icon: "lingerie",
    name: "Fantasia body Policial Americana Tam. U",
    description: "",
    price: 69,
    image: "https://thumbs2.imgbox.com/2d/16/GMOAMNMd_t.png"
  },
  {
    name_icon: "lingerie",
    name: "Fantasia body bombeira Tam. U ",
    description: "",
    price: 0,
    image: "https://thumbs2.imgbox.com/0c/4d/F5nj2gNp_t.png"
  },
  {
    name_icon: "lingerie",
    name: "Fantasia mini estudante Tam. U",
    description: "",
    price: 57,
    image: "https://thumbs2.imgbox.com/e8/c3/DW9089ms_t.png"
  },
  {
    name_icon: "lingerie",
    name: "Fantasia mini Bombeira sexy Tam. U",
    description: "",
    price: 80,
    image: "https://thumbs2.imgbox.com/74/9d/Z2IebYuP_t.png"
  },
  {
    name_icon: "lingerie",
    name: "",
    description: "",
    price: 0,
    image: "https://thumbs2.imgbox.com/a9/ab/tpHnkzN5_t.png"
  },
  {
    name_icon: "lingerie",
    name: "Pijama estampado",
    description: "",
    price: 57,
    image: "https://thumbs2.imgbox.com/23/1a/FIJ0FtHW_t.png"
  },
  {
    name_icon: "lingerie",
    name: "Body Tam. P Preto",
    description: "",
    price: 69,
    image: "https://thumbs2.imgbox.com/50/c1/ohJ6L5hG_t.png"
  },
  {
    name_icon: "lingerie",
    name: "Body Tam. P Marsala",
    description: "",
    price: 50,
    image: "https://thumbs2.imgbox.com/1e/05/LEXj7Om6_t.png"
  },
  {
    name_icon: "lingerie",
    name: "Body Tam. M Vermelho",
    description: "",
    price: 57,
    image: "https://thumbs2.imgbox.com/f3/02/ERFJUYVM_t.png"
  },
  {
    name_icon: "lingerie",
    name: "Body Tam. P Vermelho sexy",
    description: "",
    price: 30,
    image: "https://thumbs2.imgbox.com/05/d4/tiKndIMY_t.png"
  },
  {
    name_icon: "lingerie",
    name: "Calcinha em renda Laranja com regulagem",
    description: "",
    price: 23,
    image: "https://thumbs2.imgbox.com/6e/c5/pn9jE9XL_t.png"
  },
  {
    name_icon: "lingerie",
    name: "Calcinhas Tam. P fio duplo JANA",
    description: "",
    price: 23,
    image: "https://thumbs2.imgbox.com/62/30/3Z7Vbrhd_t.png"
  },
  {
    name_icon: "lingerie",
    name: "Calcinhas com frases sexy",
    description: "",
    price: 40,
    image: "https://thumbs2.imgbox.com/a8/89/as7JRCrR_t.png"
  },
  {
    name_icon: "lingerie",
    name: "Algemas de pelúcia vermelha",
    description: "",
    price: 80,
    image: "https://thumbs2.imgbox.com/6d/ec/f6MSGrMg_t.png"
  },
  {
    name_icon: "lingerie",
    name: "Calcinhas comestíveis de diferentes sabores",
    description: "",
    price: 0,
    image: "https://thumbs2.imgbox.com/2f/0b/EGOwLbly_t.png"
  },
  {
    name_icon: "lingerie",
    name: "Conj. Tam. U Marido apressado Vermelho",
    description: "",
    price: 0,
    image: "https://thumbs2.imgbox.com/b1/d7/3OkiuNtL_t.png"
  },
  {
    name_icon: "lingerie",
    name: "Conj. Tam. M | Vermelho  ",
    description: "",
    price: 57,
    image: "https://thumbs2.imgbox.com/a4/82/ZHvQR8lX_t.png"
  },
  {
    name_icon: "lingerie",
    name: "Conj. Tam. P | Preto",
    description: "",
    price: 0,
    image: "https://thumbs2.imgbox.com/a8/32/NWVJ2y9l_t.png"
  },
  {
    name_icon: "lingerie",
    name: "Pijama Tam. M Preto liganet",
    description: "",
    price: 66,
    image: "https://thumbs2.imgbox.com/78/89/8PC1x84b_t.png"
  },
  {
    name_icon: "lingerie",
    name: "Pijama Tam. P Camisola algodão",
    description: "",
    price: 69,
    image: "https://thumbs2.imgbox.com/d4/44/3AGRwq2D_t.png"
  },
  {
    name_icon: "acessórios",
    name: "Anel Peniano com Vibração",
    description: "",
    price: 92,
    image: "https://thumbs2.imgbox.com/f6/5f/2L4dSUxm_t.png"
  },
  {
    name_icon: "acessórios",
    name: "EGG Masturbador",
    description: "",
    price: 46,
    image: "https://thumbs2.imgbox.com/60/37/shzXPOxG_t.png"
  },
  {
    name_icon: "acessórios",
    name: "EGG Masturbador",
    description: "",
    price: 46,
    image: "https://thumbs2.imgbox.com/f2/1d/5muq8rRW_t.png"
  },
  {
    name_icon: "acessórios",
    name: "EGG Masturbador",
    description: "",
    price: 46,
    image: "https://thumbs2.imgbox.com/54/c1/fqPcZRrP_t.png"
  },
  {
    name_icon: "acessórios",
    name: "Estimulador de clitóris",
    description: "",
    price: 85,
    image: "https://thumbs2.imgbox.com/ce/72/c6sM1Jtm_t.png"
  },
  {
    name_icon: "acessórios",
    name: "Plug in Anal",
    description: "",
    price: 69,
    image: "https://thumbs2.imgbox.com/0c/9a/VHEEeeak_t.png"
  },
  {
    name_icon: "acessórios",
    name: "Vibrador de ponto G",
    description: "",
    price: 120,
    image: "https://thumbs2.imgbox.com/9c/26/xpZA3xbl_t.jpg"
  },
  {
    name_icon: "acessórios",
    name: "Vibrador Massageador",
    description: "",
    price: 345,
    image: "https://thumbs2.imgbox.com/7a/84/0MS8ANcZ_t.jpg"
  },
  {
    name_icon: "cosmeticos",
    name: "Gel de Massagem Preliminares",
    description: "",
    price: 22,
    image: "https://thumbs2.imgbox.com/f5/0e/irrCyQos_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Gel de Massagem-Cereja com Limão",
    description: "",
    price: 22,
    image: "https://thumbs2.imgbox.com/9e/66/DiDhqsyL_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Lubrificante Intimo",
    description: "",
    price: 34,
    image: "https://thumbs2.imgbox.com/2a/c0/hYj2UCfO_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Lubrificante Intimo",
    description: "",
    price: 16,
    image: "https://thumbs2.imgbox.com/7b/58/cHTxyphD_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Lubrificante Intimo",
    description: "",
    price: 36,
    image: "https://thumbs2.imgbox.com/43/c5/Ca2w1ca4_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Lubrificante Intimo",
    description: "",
    price: 36,
    image: "https://thumbs2.imgbox.com/ab/71/g05hQFly_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Lubrificante Intimo com sensação de Frescor e Calor",
    description: "",
    price: 0,
    image: "https://thumbs2.imgbox.com/65/3b/1vszjwf0_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Sabonete íntimo menta apinil",
    description: "",
    price: 14,
    image: "https://thumbs2.imgbox.com/a6/f4/tQxG6czI_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Sabonete íntimo morango apinil",
    description: "",
    price: 14,
    image: "https://thumbs2.imgbox.com/ed/6c/pH7CmcV6_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Sabonete íntimo Algodão doce Apinil",
    description: "",
    price: 14,
    image: "https://thumbs2.imgbox.com/d4/82/qybA2rng_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Sabonete íntimo talco Apinil",
    description: "",
    price: 14,
    image: "https://thumbs2.imgbox.com/7e/50/QVmWzMwy_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Sabonete íntimo maçã hot Apinil",
    description: "",
    price: 14,
    image: "https://thumbs2.imgbox.com/7a/e6/swKTekil_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Sabonete íntimo halls Preto Apinil",
    description: "",
    price: 14,
    image: "https://thumbs2.imgbox.com/a3/eb/Ncax05wD_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Sabonete íntimo flor de algodão Apinil",
    description: "",
    price: 14,
    image: "https://thumbs2.imgbox.com/4f/15/3V2GoT1I_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Sabonete íntimo de aroeira Apinil",
    description: "",
    price: 14,
    image: "https://thumbs2.imgbox.com/c2/88/5z15pYgE_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Sabonete íntimo de aroeira Apinil",
    description: "",
    price: 14,
    image: "https://thumbs2.imgbox.com/17/fe/LXmJfqK3_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Sabonete íntimo 17 ervas Apinil",
    description: "",
    price: 0,
    image: "https://thumbs2.imgbox.com/ca/c0/C6OMRHs1_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Lubrificante morango love lub 60g",
    description: "",
    price: 0,
    image: "https://thumbs2.imgbox.com/d8/09/TnxsSAmE_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Lubrificante hot love lub 60g",
    description: "",
    price: 0,
    image: "https://thumbs2.imgbox.com/75/e1/C6RBYHbT_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Lubrificante neutro Love lub 60g",
    description: "",
    price: 25,
    image: "https://thumbs2.imgbox.com/03/bb/hYFy3b1R_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Sabonete íntimo 17 ervas Apinil",
    description: "",
    price: 14,
    image: "https://thumbs2.imgbox.com/93/55/ZEddGAQF_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Lubrificante Ice love lub 60g",
    description: "",
    price: 25,
    image: "https://thumbs2.imgbox.com/ad/d7/goLqUJin_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Lubrificante menta love lub 60g",
    description: "",
    price: 25,
    image: "https://thumbs2.imgbox.com/12/09/lVoQq3HE_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Lubrificante beijável menta ice 60g",
    description: "",
    price: 34,
    image: "https://thumbs2.imgbox.com/a3/d0/1eX8Z53T_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Spray excitante beijável Power shock menta",
    description: "",
    price: 36,
    image: "https://thumbs2.imgbox.com/61/87/BoMOyVbu_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Spray excitante beijável Power shock morango",
    description: "",
    price: 36,
    image: "https://thumbs2.imgbox.com/7a/59/HdaEkyec_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Spray excitante beijável Power shock chiclete",
    description: "",
    price: 36,
    image: "https://thumbs2.imgbox.com/42/c6/lXN2Vqvc_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Sabonete íntimo 17 ervas Apinil",
    description: "",
    price: 0,
    image: "https://thumbs2.imgbox.com/f8/42/h0FLxHKH_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Gel excitante yummy cosméticoss em gel morango",
    description: "",
    price: 13,
    image: "https://thumbs2.imgbox.com/3d/56/pnu3yoMV_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Gel excitante yummy cosméticoss em gel ice gel",
    description: "",
    price: 13,
    image: "https://thumbs2.imgbox.com/e8/c1/qLL0mhYx_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Bolinha caps sex sabor cereja",
    description: "",
    price: 13,
    image: "https://thumbs2.imgbox.com/9a/85/8m5Fp8lC_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Bolinha Pepper ball esquenta",
    description: "",
    price: 13,
    image: "https://thumbs2.imgbox.com/60/ae/523q9Lly_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Bolinha Pepper ball gela",
    description: "",
    price: 13,
    image: "https://thumbs2.imgbox.com/8d/7f/XVdm5wn5_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Gel excitante goze +  sexy fantasy",
    description: "",
    price: 36,
    image: "https://thumbs2.imgbox.com/5e/9e/K9Ww2o5s_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Gel Excitante feminino Xana loka 15g",
    description: "",
    price: 36,
    image: "https://thumbs2.imgbox.com/4b/f1/tf4ED7Rb_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Sabonete íntimo 17 ervas Apinil",
    description: "",
    price: 0,
    image: "https://thumbs2.imgbox.com/5e/48/iTi317Tp_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Gel adstringente sempre virgem 25g",
    description: "",
    price: 57,
    image: "https://thumbs2.imgbox.com/19/9a/V5QNGl7W_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Gel dessensibilizante anal 7 sensações  25g",
    description: "",
    price: 57,
    image: "https://thumbs2.imgbox.com/c7/ce/SGKwU9jh_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Gel dessensibilizante anal lacradinha",
    description: "",
    price: 34,
    image: "https://thumbs2.imgbox.com/b2/ee/OCw2BZIz_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Gel retardante Volumão Hotflawer 25g",
    description: "",
    price: 50,
    image: "https://thumbs2.imgbox.com/41/38/cZ8yRPWI_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Gel retardante poção do tempo INTT 15g",
    description: "",
    price: 34,
    image: "https://thumbs2.imgbox.com/ad/b6/tIZfqfs2_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Óleo de massagem beijável morango 120ml",
    description: "",
    price: 57,
    image: "https://thumbs2.imgbox.com/56/c7/LVZbWhKW_t.png"
  },
  {
    name_icon: "cosmeticos",
    name: "Óleo de massagem amor próprio 120ml",
    description: "",
    price: 50,
    image: "https://thumbs2.imgbox.com/30/ad/UZckBj8h_t.png"
  },
  {
    name_icon: "brincadeiras",
    name: "Roleta do amor Gire",
    description: "",
    price: 23,
    image: "https://thumbs2.imgbox.com/9b/0e/kJDogAS2_t.png"
  },
  {
    name_icon: "brincadeiras",
    name: "Dado Hétero Posições",
    description: "",
    price: 11,
    image: "https://thumbs2.imgbox.com/49/bc/ZexNTZ2h_t.png"
  },
  {
    name_icon: "brincadeiras",
    name: "Baralho Jogo de casais Quiz - 20 cartas",
    description: "",
    price: 16,
    image: "https://thumbs2.imgbox.com/4b/00/6hNUKdfX_t.png"
  },
  {
    name_icon: "brincadeiras",
    name: "Baralho hétero - 54 cartas",
    description: "",
    price: 39,
    image: "https://thumbs2.imgbox.com/5c/45/UHK3JaGt_t.png"
  }
]

async function main() {
  await prisma.snack.createMany({
    data: snacks,
    skipDuplicates: true,
  })
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
