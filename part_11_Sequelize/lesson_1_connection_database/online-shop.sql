-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 02, 2020 at 07:35 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `online-shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `imageURL` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `price`, `imageURL`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'Nguyễn Khôi', 343, 'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-0/s600x600/118311213_2941108286116776_3328558214243660687_o.jpg?_nc_cat=107&_nc_sid=b9115d&_nc_ohc=2dCpwOrGB7sAX-XKL9q&_nc_ht=scontent-sin6-1.xx&tp=7&oh=dd3c04db2f3d7da55bf4108de54e5045&oe=5F7495FF', 'My hair is a bit dark\r\nYour lips are slightly red\r\nHey you guys\r\nI talk little again\r\nDo you love me?', '2020-09-02 17:03:55', '2020-09-02 17:03:55'),
(2, '<script>alert(\'a\');</script>', 54, 'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-0/s600x600/118243419_2273065152838702_755918056099716101_o.jpg?_nc_cat=111&_nc_sid=b9115d&_nc_ohc=8zIfat95CDsAX-mT-jl&_nc_ht=scontent.fsgn5-3.fna&tp=7&oh=bdc67f820c0b4ebcd7b11871953d82d4&oe=5F755CEA', 'Nhà có cô e gái 2k3 không biết có bác nào muốn nhận nuôi không', '2020-09-02 17:11:36', '2020-09-02 17:11:36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
