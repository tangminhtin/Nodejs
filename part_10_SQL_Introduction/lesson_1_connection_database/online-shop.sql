-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 02, 2020 at 06:10 PM
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
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` double NOT NULL,
  `description` text NOT NULL,
  `imageURL` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `price`, `description`, `imageURL`) VALUES
(1, 'Tới Nguyễn Văn', 234, 'If you have had this experience please gather  here let\'s have a meeting.\r\nI have had this experience several times, at a point I feel like ending coding', 'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-0/s600x600/118527094_1702682353224198_2777784673815020956_o.jpg?_nc_cat=104&_nc_sid=b9115d&_nc_ohc=9g6ifHVNzDUAX9sDhWn&_nc_ht=scontent-sin6-1.xx&tp=7&oh=46b0e09c249c6651d927d2806e20d34d&oe=5F7417A8'),
(2, 'Cáo Ducatista', 232, 'Uống nhầm một ánh mắt..', 'https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-0/s600x600/118422407_2942419359203759_7701399856707932793_o.jpg?_nc_cat=109&_nc_sid=825194&_nc_ohc=x4-X0hKY88MAX99CWFF&_nc_ht=scontent-xsp1-1.xx&tp=7&oh=4406793af07bcc157d3f7af7ccbf200c&oe=5F74BBC4'),
(3, 'Nguyễn Ngọc Ánh', 342, 'portrait, my teacher', 'https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-0/p526x296/118446675_3091628387630251_5998709842220711624_o.jpg?_nc_cat=107&_nc_sid=825194&_nc_ohc=v-nUK7LERgsAX_Fta75&_nc_ht=scontent-xsp1-2.xx&tp=6&oh=36d830d39e40c8a35a46d371007506f7&oe=5F751D76'),
(4, 'Phạm Trúc Linh', 343, 'Nắng chiều sân thượng', 'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-0/s600x600/118749877_3334379523453180_6131054582874803584_o.jpg?_nc_cat=104&_nc_sid=b9115d&_nc_ohc=SpZH8p3guCMAX-woK_G&_nc_ht=scontent-sin6-1.xx&tp=7&oh=a37d2443500e026c66075f79d7cf8a68&oe=5F74BBAF'),
(5, 'Nguyễn Hoàng Ngọc Huyền', 234, 'Vì e là nắng nên làm cho bao nhiều người ngẩn ngơ :))) ', 'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-0/s600x600/118617490_1804777242994239_8646058638365380129_o.jpg?_nc_cat=107&_nc_sid=b9115d&_nc_ohc=LynAl_eun3kAX8N8Dzf&_nc_ht=scontent-sin6-1.xx&tp=7&oh=dc9fa54fd345035d67c8e705fe36cfc9&oe=5F7635FD');

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
