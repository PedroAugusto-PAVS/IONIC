-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 19/09/2024 às 00:40
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `dmprojetofinal`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `produtos`
--

CREATE TABLE `produtos` (
  `id` int(11) NOT NULL,
  `nome_produto` varchar(255) NOT NULL,
  `quant` int(11) NOT NULL,
  `valor` decimal(10,2) NOT NULL,
  `adquirido` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `produtos`
--

INSERT INTO `produtos` (`id`, `nome_produto`, `quant`, `valor`, `adquirido`) VALUES
(12, 'Aveia em Flocos', 1, 12.99, 1),
(13, 'Nutella', 1, 29.90, 0),
(14, 'Feijão', 5, 20.99, 1),
(16, 'Lichia', 2, 11.99, 0),
(17, 'Algodão', 1, 8.99, 0),
(19, 'dsadsa', 1, 1.00, 0);

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `email` varchar(150) NOT NULL,
  `senha` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `email`, `senha`) VALUES
(3, 'Jeferson', 'jeferson@hotmail.com', '$2y$10$0Pi7N/Io8.oHwDliZaw9ueKBlUwn237EyyY3yz/OFu/LGW4kf8WyG'),
(4, 'Lucas', 'lucas@hotmail.com', '$2y$10$dqno.OUB1hwn9kRTmlcsPOFPS0jPVpa6bJx0E71DL5HBwTXtcivjm'),
(24, 'Maria', 'maria@hotmail.com', '$2y$10$I7i/dJyP9Fk4D2UC.aytRO9tPJD0kz0MfQ9vQKekEAY1MaDvNBuNG'),
(25, 'João', 'joao@hotmail.com', '$2y$10$muM4lqaNKgZeMurGVo0AgeVi51sX4ghK1/NPq55a4Aj0QFJGb54aS'),
(26, 'Cauan', 'cauan@hotmail.com', '$2y$10$.rLcHx3.3h.gnYSrXE62POkA3BlngTmMqTbJ1GqHOp0nuq.Id0Kae'),
(27, 'pedro', 'pedro@gmail.com', '$2y$10$xusx.iCGFwJWVTNhDFYcpuesIxPmq3U2f7qMjZ6rAFErblNe/8bs2');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
