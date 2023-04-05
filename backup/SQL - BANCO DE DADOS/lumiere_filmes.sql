-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 177.137.252.222    Database: lumiere
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `filmes`
--

DROP TABLE IF EXISTS `filmes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `filmes` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(200) NOT NULL,
  `imagem` text NOT NULL,
  `background` text NOT NULL,
  `valor` varchar(20) NOT NULL,
  `tipo` varchar(20) NOT NULL,
  `categorias_id` int DEFAULT NULL,
  `classificacoes_id` int DEFAULT NULL,
  `descricao` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `filmes`
--

LOCK TABLES `filmes` WRITE;
/*!40000 ALTER TABLE `filmes` DISABLE KEYS */;
INSERT INTO `filmes` VALUES (1,'SPIDER-MAN - NO WHAY HOME','homemAranha','homemAranha_01','9,90','filme',2,4,'Em Homem-Aranha: Sem Volta para Casa, Peter Parker (Tom Holland) precisará lidar com as \n    consequências da sua identidade como o herói mais querido do mundo após ter sido revelada \n    pela reportagem do Clarim Diário, com uma gravação feita por Mysterio (Jake Gyllenhaal) \n    no filme anterior. Incapaz de separar sua vida normal das aventuras de ser um super-herói, \n    além de ter sua reputação arruinada por acharem que foi ele quem matou Mysterio e pondo em \n    risco seus entes mais queridos, Parker pede ao Doutor Estranho (Benedict Cumberbatch) \n    para que todos esqueçam sua verdadeira identidade. Entretanto, o feitiço não sai como \n    planejado e a situação torna-se ainda mais perigosa quando vilões de outras versões de \n    Homem-Aranha de outro universos acabam indo para seu mundo. Agora, Peter não só deter \n    vilões de suas outras versões e fazer com que eles voltem para seu universo original, \n    mas também aprender que, com grandes poderes vem grandes responsabilidades.'),(2,'A MULHER NA JANELA','aMulherNaJanela','aMulherNaJanela_01','9,90','filme',14,5,'Em A Mulher na Janela, Anna Fox (Amy Adams) é uma alcoólatra reclusa que passa os dias \n    em seu apartamento em Nova York, assistindo a filmes antigos e observando seus vizinhos. \n    Quando a família Russell se muda para o prédio da frente, ela passa a espionar o que seria \n    a família perfeita, até testemunhar uma cena chocante que muda sua vida.'),(3,'ARREMESSANDO ALTO','arremessandoAlto','arremessandoAlto_01','9,90','filme',3,4,'Em Arremessando Alto, o caça-talentos profissional do basquete, Stanley Beren (Adam Sandler), \n    não vive um bom momento na carreira. Exercendo seu trabalho sem muito propósito, ele não acredita\n    mais que conseguirá descobrir um novo talento significativo. Mas, depois de ser demitido, surge \n    uma nova esperança. O olheiro profissional do basquete, fica empolgado pela primeira vez em muito \n    tempo, quando descobre por acaso o jogador amador espanhol, Bo Cruz (Juancho Hernangomez). \n    Stanley o encontra jogando em um parque nos arredores de Madri. Agora abastecido com um novo propósito, \n    Stanley tem como missão preparar Bo para a NBA. Motivado a despertar em Bo toda a paixão e \n    dedicação necessária para se destacar no esporte, o caça-talentos acredita que juntos, a dupla \n    pode alcançar patamares de sucesso, nas quadras e na história do jogo.'),(4,'AS BRANQUELAS','asBranquelas','asBranquelas_01','9,90','filme',14,5,'Em As Branquelas, os irmãos Marcus (Marlon Wayans) e Kevin Copeland (Shawn Wayans) são detetives do FBI \n    que estão com problemas no trabalho. A última investigação da dupla foi um grande fracasso e eles estão \n    sob a ameaça de serem demitidos. Quando um plano para sequestrar as mimadas irmãs Brittany (Maitland Ward) \n    e Tiffany Wilson (Anne Dudek) é descoberto, o caso é entregue aos principais rivais dos irmãos Copeland, \n    os agentes Vincent Gomez (Eddie Velez) e Jack Harper (Lochlyn Munro). Para aumentar ainda mais a \n    humilhação da dupla, eles são escalados para escoltar as jovens mimadas do aeroporto até o local \n    de um evento pelo qual elas esperaram por meses. Porém no trajeto um acidente de carro provoca um \n    verdadeiro desastre: enquanto uma das irmãs arranha o nariz, a outra corta o lábio. Desesperadas, \n    elas se recusam a ir ao evento. É quando,para salvar o emprego, Marcus e Kevin decidem por assumir as identidades das irmãs.'),(5,'CORAÇÕES DE FERRO','coracoesDeFerro','coracoesDeFerro_01','9,90','filme',1,3,'Durante o final da Segunda Guerra Mundial, um grupo de cinco soldados americanos é encarregado \n    de atacar os nazistas dentro da própria Alemanha. Apesar de estarem em quantidade inferior \n    e terem poucas armas, eles são liderados pelo enfurecido Wardaddy (Brad Pitt), sargento que \n    pretende levá-los à vitória, enquanto ensina o novato Norman (Logan Lerman) a lutar.'),(6,'GUERRA MUNDIAL Z','guerraMundialZ','guerraMundialZ_01','9,90','filme',8,3,'Uma terrível e misteriosa doença se espalha pelo mundo, transformando as pessoas em uma\n    espécie de zumbis. A velocidade do contágio é impressionante e logo o Governo americano \n    recruta um ex-investigador da ONU (Organização das Nações Unidas) para investigar o que \n    pode estar acontecendo e assim salvar a humanidade, tendo em vista que as previsões são \n    as mais catastróficas possíveis. Gerry Lane (Brad Pitt) tinha optado por dedicar mais \n    tempo a sua esposa Karen (Mireille Enos) e as filhas, mas seu amor a pátria e o desejo \n    de salvar sua família acabam contribuindo para que ele tope a missão. Agora, ele precisa \n    percorrer o caminho inverso da contaminação para tentar entender as causas ou, ao menos, \n    indentificar uma maneira de conter o contágio até que se descubra uma cura antes do  apocalipse. \n    Começa uma verdadeira corrida contra o tempo, que mostra-se cada vez mais curto, \n    na medida que a população de humanos não para de diminuir. ');
/*!40000 ALTER TABLE `filmes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-30 10:28:38
