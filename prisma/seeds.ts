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
      price: 52,
      image: "https://thumbs2.imgbox.com/14/3c/OdU10kYe_t.png"
    },
    {
      
      name_icon: "lingerie",
      name: "Fantasia enfermeira sexual Tam. U",
      description: "",
      price: 60,
      image: "https://thumbs2.imgbox.com/8b/df/yjCsqua3_t.png"
    },
    {
      
      name_icon: "lingerie",
      name: "Fantasia mini Policial Americana Tam. U",
      description: "",
      price: 60,
      image: "https://thumbs2.imgbox.com/85/ac/mX6LX1SM_t.png"
    },
    {
      
      name_icon: "lingerie",
      name: "Fantasia mini marinheira Tam. U",
      description: "",
      price: 70,
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
      price: 60,
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
      name: "Body com conjunto para pulso e pescoço Tam. P Preto",
      description: "",
      price: 60,
      image: `${process.env.API_URL}/fotos/body1.png`
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
      image: `${process.env.API_URL}/fotos/body2.png`
    },
    {
      name_icon: "lingerie",
      name: "Body Tam. P Marsala",
      description: "",
      price: 50,
      image: `${process.env.API_URL}/fotos/body3.png`
    },
    {
      name_icon: "lingerie",
      name: "Body Tam. M Vermelho",
      description: "",
      price: 57,
      image: `${process.env.API_URL}/fotos/body4.png`
    },
    {
      name_icon: "lingerie",
      name: "Body Tam. P Vermelho sexy",
      description: "",
      price: 30,
      image: `${process.env.API_URL}/fotos/body5.png`
    },
    {
      name_icon: "lingerie",
      name: "Calcinha em renda Laranja com regulagem",
      description: "",
      price: 23,
      image: `${process.env.API_URL}/fotos/calcinha-em-renda.png`
    },
    {
      name_icon: "lingerie",
      name: "Calcinhas Tam. P fio duplo JANA",
      description: "",
      price: 23,
      image: `${process.env.API_URL}/fotos/calcinha-fio.png`
    },
    {
      name_icon: "lingerie",
      name: "Calcinhas com frases sexy",
      description: "",
      price: 40,
      image: `${process.env.API_URL}/fotos/calcinha-frases.png`
    },
    {
      name_icon: "lingerie",
      name: "Algemas de pelúcia vermelha",
      description: "",
      price: 80,
      image: `${process.env.API_URL}/fotos/calcinha-led-pisca.png`
    },
    {
      name_icon: "lingerie",
      name: "Calcinhas comestíveis de diferentes sabores",
      description: "",
      price: 15,
      image: `${process.env.API_URL}/fotos/calcinhas-comestiveis.png`
    },
    {
      name_icon: "lingerie",
      name: "Conj. Tam. U Marido apressado Vermelho",
      description: "",
      price: 50,
      image: `${process.env.API_URL}/fotos/conjunto.png`
    },
    {
      name_icon: "lingerie",
      name: "Conj. Tam. M | Vermelho  ",
      description: "",
      price: 57,
      image: `${process.env.API_URL}/fotos/conjunto1.png`
    },
    {
      name_icon: "lingerie",
      name: "Conj. Tam. P | Preto",
      description: "",
      price: 60,
      image: `${process.env.API_URL}/fotos/conjunto2.png`
    },
    {
      name_icon: "lingerie",
      name: "Pijama Tam. M Preto liganet",
      description: "",
      price: 66,
      image: `${process.env.API_URL}/fotos/pijamas1.png`
    },
    {
      name_icon: "lingerie",
      name: "Pijama Tam. P Camisola algodão",
      description: "",
      price: 69,
      image: `${process.env.API_URL}/fotos/pijamas2.png`
    },
    {
      name_icon: "acessórios",
      name: "Anel Peniano com Vibração",
      description: "",
      price: 92,
      image: `${process.env.API_URL}/fotos/toy1.jpg`
    },
    {
      
      name_icon: "acessórios",
      name: "EGG Masturbador",
      description: "",
      price: 46,
      image: `${process.env.API_URL}/fotos/egg-masturbador.png`
    },
    {
      
      name_icon: "acessórios",
      name: "EGG Masturbador",
      description: "",
      price: 46,
      image: `${process.env.API_URL}/fotos/egg-masturbador1.png`
    },
    {
      
      name_icon: "acessórios",
      name: "EGG Masturbador",
      description: "",
      price: 46,
      image: `${process.env.API_URL}/fotos/egg-masturbador2.png`
    },
    {
      
      name_icon: "acessórios",
      name: "Estimulador de clitóris",
      description: "",
      price: 85,
      image: `${process.env.API_URL}/fotos/toy4.jpg`
    },
    {
      name_icon: "acessórios",
      name: "Plug in Anal",
      description: "",
      price: 69,
      image: `${process.env.API_URL}/fotos/toy2.jpg`
    },
    {
      name_icon: "acessórios",
      name: "Vibrador de ponto G",
      description: "",
      price: 120,
      image: `${process.env.API_URL}/fotos/toy3.jpg`
    },
    {
      name_icon: "acessórios",
      name: "Vibrador Massageador",
      description: "",
      price: 345,
      image: `${process.env.API_URL}/fotos/toy5.jpg`
    },
    {
      name_icon: "acessórios",
      name: "Vibrador (pilha) ponto G ROSA vibração única",
      description: "",
      price: 46,
      image: `${process.env.API_URL}/fotos/vibrador5.png`
    },
    {
      name_icon: "acessórios",
      name: "Vibrador golfinho ROSA vibração única",
      description: "",
      price: 46,
      image: `${process.env.API_URL}/fotos/vibrador4.png`
    },
    {
      name_icon: "acessórios",
      name: "Vibrador formato de batom vibração única",
      description: "",
      price: 57,
      image: `${process.env.API_URL}/fotos/vibrador3.png`
    },
    {
      name_icon: "acessórios",
      name: "Vibrador sugador e vibrador 10 vibração",
      description: "",
      price: 250,
      image: `${process.env.API_URL}/fotos/vibrador7.png`
    },
    {
      name_icon: "acessórios",
      name: "Vibrador longa distância 10 vibrações controlado por APP",
      description: "",
      price: 280,
      image: `${process.env.API_URL}/fotos/vibrador8.png`
    },
    {
      name_icon: "acessórios",
      name: "Vibrador (recarregável) vai e vem 36 vibrações ROSA",
      description: "",
      price: 180,
      image: `${process.env.API_URL}/fotos/vibrador10.png`
    },
    {
      name_icon: "acessórios",
      name: "Vibrador (recarregável) vai e vem 36 vibrações DOURADO",
      description: "",
      price: 180,
      image: `${process.env.API_URL}/fotos/vibrador11.png`
    },
    {
      name_icon: "acessórios",
      name: "Vibrador mini bullet Aveludado 1 modos de Vibração",
      description: "",
      price: 27,
      image: `${process.env.API_URL}/fotos/vibrador14.png`
    },
    {
      name_icon: "acessórios",
      name: "Vibrador (pilha) personal aveludado",
      description: "",
      price: 57,
      image: `${process.env.API_URL}/fotos/vibrador13.png`
    },
    {
      name_icon: "acessórios",
      name: "Vibrador (pilha) Ponto G com 30 vibrações",
      description: "",
      price: 184,
      image: `${process.env.API_URL}/fotos/vibrador12.png`
    },
    {
      name_icon: "acessórios",
      name: "Coleira com algema em couro sexy fantasy",
      description: "",
      price: 185,
      image: `${process.env.API_URL}/fotos/algema7.png`
    },
    {
      name_icon: "acessórios",
      name: "Algemas - Separador de braços (25 cm)",
      description: "",
      price: 80,
      image: `${process.env.API_URL}/fotos/algema8.png`
    },
    {
      name_icon: "acessórios",
      name: "Algemas metal",
      description: "",
      price: 69,
      image: `${process.env.API_URL}/fotos/algema3.png`
    },
    {
      name_icon: "acessórios",
      name: "Prótese dupla 30,5x4,5 cm",
      description: "",
      price: 184,
      image: `${process.env.API_URL}/fotos/íntimo3.png`
    },
    {
      name_icon: "acessórios",
      name: "Capa Peniana silicone ROXO 15 cm",
      description: "",
      price: 46,
      image: `${process.env.API_URL}/fotos/íntimo7.png`
    },
    {
      name_icon: "acessórios",
      name: "Anel peniano Rosa ursinho com vibrador",
      description: "",
      price: 27,
      image: `${process.env.API_URL}/fotos/íntimo9.png`
    },
    {
      name_icon: "acessórios",
      name: "Capa Peniana silicone transparente 15 cm",
      description: "",
      price: 46,
      image: `${process.env.API_URL}/fotos/íntimo13.png`
    },
    {
      name_icon: "acessórios",
      name: "Masturbador vagina lanterna (com vibro)",
      description: "",
      price: 138,
      image: `${process.env.API_URL}/fotos/íntimo6.png`
    },
    {
      name_icon: "acessórios",
      name: "Anel companheiro 13x3,5 cm",
      description: "",
      price: 55,
      image: `${process.env.API_URL}/fotos/íntimo8.png`
    },
    {
      name_icon: "acessórios",
      name: "Anel companheiro 13x3,5 cm Desire",
      description: "",
      price: 92,
      image: `${process.env.API_URL}/fotos/íntimo5.png`
    },
    {
      name_icon: "acessórios",
      name: "Capa Peniana realístico 7518 16,5x3,5cm cyberskin",
      description: "",
      price: 66,
      image: `${process.env.API_URL}/fotos/íntimo12.png`
    },
    {
      name_icon: "acessórios",
      name: "Disco Menstrual Reutilizável",
      description: "",
      price: 70,
      image: `${process.env.API_URL}/fotos/íntimo18.png`
    },
    {
      name_icon: "acessórios",
      name: "Plug anal redondo M Pink",
      description: "",
      price: 69,
      image: `${process.env.API_URL}/fotos/íntimo25.png`
    },
    {
      name_icon: "acessórios",
      name: "Coletor menstrual",
      description: "",
      price: 41,
      image: `${process.env.API_URL}/fotos/íntimo17.png`
    },
    {
      name_icon: "acessórios",
      name: "Ducha íntima 230 ml com dois bicos",
      description: "",
      price: 80,
      image: `${process.env.API_URL}/fotos/íntimo26.png`
    },
    {
      name_icon: "acessórios",
      name: "Plug anal redondo M red",
      description: "",
      price: 69,
      image: `${process.env.API_URL}/fotos/íntimo23.png`
    },
    {
      name_icon: "acessórios",
      name: "Plug anal coração M ",
      description: "",
      price: 69,
      image: `${process.env.API_URL}/fotos/íntimo24.png`
    },
    {
      name_icon: "acessórios",
      name: "Plug anal redondo M pink",
      description: "",
      price: 69,
      image: `${process.env.API_URL}/fotos/íntimo21.png`
    },
    {
      name_icon: "acessórios",
      name: "Plug anal redondo red",
      description: "",
      price: 75,
      image: `${process.env.API_URL}/fotos/íntimo22.png`
    },
    {
      
      name_icon: "cosmeticos",
      name: "Gel de Massagem Preliminares",
      description: "",
      price: 22,
      image: `${process.env.API_URL}/fotos/gel-de-massagem-preliminares.png`
    },
    {
      
      name_icon: "cosmeticos",
      name: "Gel de Massagem-Cereja com Limão",
      description: "",
      price: 22,
      image: `${process.env.API_URL}/fotos/Gel-de-massagem-cereja-com-limão.png`
    },
    {
      
      name_icon: "cosmeticos",
      name: "K-med 2 em 1 gel fr 203g lgbtqia+",
      description: "",
      price: 34,
      image: "https://thumbs2.imgbox.com/2a/c0/hYj2UCfO_t.png"
    },
    {
      
      name_icon: "cosmeticos",
      name: "K-med Hot Fire Gel Lubrificante Íntimo",
      description: "",
      price: 16,
      image: `${process.env.API_URL}/fotos/lubrificante-intimo-2.png`
    },
    {
      
      name_icon: "cosmeticos",
      name: "Lubrificante Íntimo Gel K-Med 100g",
      description: "",
      price: 36,
      image: `${process.env.API_URL}/fotos/lubrificante-intimo-4.png`
    },
    {
      
      name_icon: "cosmeticos",
      name: "Gel Lubrificante Íntimo 2 em 1 K-Med",
      description: "",
      price: 36,
      image: `${process.env.API_URL}/fotos/lubrificante-intimo-5.png`
    },
    {
      
      name_icon: "cosmeticos",
      name: "Lubrificante com sensação de Frescor",
      description: "",
      price: 40,
      image: `${process.env.API_URL}/fotos/lubrificante-intimo-com-sensação-de-frescor-e-calor.png`
    },
    {
      
      name_icon: "cosmeticos",
      name: "Sabonete íntimo menta apinil",
      description: "",
      price: 14,
      image: `${process.env.API_URL}/fotos/sabonete1.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Sabonete íntimo morango apinil",
      description: "",
      price: 14,
      image: `${process.env.API_URL}/fotos/sabonete2.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Sabonete íntimo Algodão doce Apinil",
      description: "",
      price: 14,
      image: `${process.env.API_URL}/fotos/sabonete3.png`
    },
    {
      
      name_icon: "cosmeticos",
      name: "Sabonete íntimo talco Apinil",
      description: "",
      price: 14,
      image: `${process.env.API_URL}/fotos/sabonete4.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Sabonete íntimo maçã hot Apinil",
      description: "",
      price: 14,
      image: `${process.env.API_URL}/fotos/sabonete5.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Sabonete íntimo halls Preto Apinil",
      description: "",
      price: 14,
      image: `${process.env.API_URL}/fotos/sabonete6.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Sabonete íntimo flor de algodão Apinil",
      description: "",
      price: 14,
      image: `${process.env.API_URL}/fotos/sabonete7.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Lubrificante intimo K-MED menta",
      description: "",
      price: 14,
      image: `${process.env.API_URL}/fotos/lubrificante-íntimo.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Sabonete íntimo de aroeira Apinil",
      description: "",
      price: 14,
      image: `${process.env.API_URL}/fotos/sabonete8.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Gel para massagem- cliv Intt",
      description: "",
      price: 90,
      image: `${process.env.API_URL}/fotos/GEL-PARA-MASSAGEM.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Lubrificante morango love lub 60g",
      description: "",
      price: 23,
      image: `${process.env.API_URL}/fotos/lubrificante-corporal2.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Lubrificante hot love lub 60g",
      description: "",
      price: 23,
      image: `${process.env.API_URL}/fotos/lubrificante-corporal3.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Lubrificante neutro Love lub 60g",
      description: "",
      price: 25,
      image: `${process.env.API_URL}/fotos/lubrificante-corporal6.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Sabonete íntimo 17 ervas Apinil",
      description: "",
      price: 14,
      image: `${process.env.API_URL}/fotos/sabonete9.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Lubrificante Ice love lub 60g",
      description: "",
      price: 25,
      image: `${process.env.API_URL}/fotos/lubrificante-corporal4.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Lubrificante menta love lub 60g",
      description: "",
      price: 25,
      image: `${process.env.API_URL}/fotos/lubrificante-corporal1.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Lubrificante beijável menta ice 60g",
      description: "",
      price: 34,
      image: `${process.env.API_URL}/fotos/lubrificante-frozen.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Spray excitante beijável Power shock menta",
      description: "",
      price: 36,
      image: `${process.env.API_URL}/fotos/spray.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Spray excitante beijável Power shock morango",
      description: "",
      price: 36,
      image: `${process.env.API_URL}/fotos/spray2.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Spray excitante beijável Power shock chiclete",
      description: "",
      price: 36,
      image: `${process.env.API_URL}/fotos/spray1.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Lubrificante Hot Premium Beijável - quente",
      description: "",
      price: 35,
      image: `${process.env.API_URL}/fotos/lubrificante-corporal.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Gel excitante cosméticos em gel",
      description: "",
      price: 15,
      image: `${process.env.API_URL}/fotos/GEL-TÉRMICO1.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Gel excitante cosméticos em gel ice",
      description: "",
      price: 15,
      image: `${process.env.API_URL}/fotos/GEL-TÉRMICO.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Bolinha caps sex sabor cereja",
      description: "",
      price: 13,
      image: `${process.env.API_URL}/fotos/CAPSULA-GELATINA.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Bolinha Pepper ball esquenta",
      description: "",
      price: 13,
      image: `${process.env.API_URL}/fotos/ESQUENTA-PLUS.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Bolinha Pepper ball gela",
      description: "",
      price: 13,
      image: `${process.env.API_URL}/fotos/GELA-PLUS.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Gel excitante goze +  sexy fantasy",
      description: "",
      price: 36,
      image: `${process.env.API_URL}/fotos/GEL-ACELERADOR.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Gel Excitante feminino Xana loka 15g",
      description: "",
      price: 36,
      image: `${process.env.API_URL}/fotos/GEL-150G.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Pomada Fogo do Dragão Tradicional 4g",
      description: "",
      price: 15,
      image: `${process.env.API_URL}/fotos/POMADA.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Gel adstringente sempre virgem 25g",
      description: "",
      price: 57,
      image: `${process.env.API_URL}/fotos/GEL-ADSTRINGENTE1.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Gel dessensibilizante anal 7 sensações  25g",
      description: "",
      price: 57,
      image: `${process.env.API_URL}/fotos/GEL-LUBRIFICANTE.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Gel dessensibilizante anal lacradinha",
      description: "",
      price: 34,
      image: `${process.env.API_URL}/fotos/GEL-ADSTRINGENTE.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Gel retardante Volumão Hotflawer 25g",
      description: "",
      price: 50,
      image: `${process.env.API_URL}/fotos/INTENSIFICADOR.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Gel retardante poção do tempo INTT 15g",
      description: "",
      price: 34,
      image: `${process.env.API_URL}/fotos/GEL-PROLONGADOR.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Óleo de massagem beijável morango",
      description: "",
      price: 57,
      image: `${process.env.API_URL}/fotos/óleo-corporal1.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Óleo de massagem amor próprio 120ml",
      description: "",
      price: 50,
      image:  `${process.env.API_URL}/fotos/óleo-corporal2.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Bebida - Mel exotic Feminino",
      description: "",
      price: 14,
      image:  `${process.env.API_URL}/fotos/mel-estimulante-masculino.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Mel exotic masculino",
      description: "",
      price: 14,
      image: `${process.env.API_URL}/fotos/mel-estimulante-feminino.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Mel Power honey 10g",
      description: "",
      price: 34,
      image: `${process.env.API_URL}/fotos/power-honey.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Bebida - Pó da bruxinha",
      description: "",
      price: 11,
      image: `${process.env.API_URL}/fotos/bebidas.png`
    },
    {
      name_icon: "cosmeticos",
      name: "Garganta profunda",
      description: "",
      price: 11,
      image: `${process.env.API_URL}/fotos/bebidas2.png`
    },
    {
      name_icon: "cosmeticos",
      name: "SEXY ENERGY tesão de vaca",
      description: "",
      price: 11,
      image: `${process.env.API_URL}/fotos/bebidas1.png`
    },
    {
      name_icon: "cosmeticos",
      name: "SEXY ENERGY tesão de touro",
      description: "",
      price: 11,
      image: `${process.env.API_URL}/fotos/bebidas3.png`
    },
    {
      
      name_icon: "brincadeiras",
      name: "Roleta do amor Gire",
      description: "",
      price: 23,
      image: `${process.env.API_URL}/fotos/brincadeira1.png`
    },
    {
      
      name_icon: "brincadeiras",
      name: "Dado Hétero Posições",
      description: "",
      price: 11,
      image: `${process.env.API_URL}/fotos/brincadeira2.png`
    },
    {
      
      name_icon: "brincadeiras",
      name: "Baralho Jogo de casais Quiz - 20 cartas",
      description: "",
      price: 16,
      image: `${process.env.API_URL}/fotos/brincadeira3.png`
    },
    {
      
      name_icon: "brincadeiras",
      name: "Baralho hétero - 54 cartas",
      description: "",
      price: 39,
      image: `${process.env.API_URL}/fotos/brincadeira4.png`
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
