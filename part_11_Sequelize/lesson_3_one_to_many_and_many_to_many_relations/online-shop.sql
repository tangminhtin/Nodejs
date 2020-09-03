-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 03, 2020 at 07:25 PM
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
-- Table structure for table `cartitems`
--

CREATE TABLE `cartitems` (
  `id` int(11) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `cartId` int(11) DEFAULT NULL,
  `productId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cartitems`
--

INSERT INTO `cartitems` (`id`, `quantity`, `createdAt`, `updatedAt`, `cartId`, `productId`) VALUES
(1, 1, '2020-09-03 17:05:31', '2020-09-03 17:05:31', 1, 1),
(2, 3, '2020-09-03 17:06:57', '2020-09-03 17:22:24', 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `createdAt`, `updatedAt`, `userId`) VALUES
(1, '2020-09-03 16:57:24', '2020-09-03 16:57:24', 1),
(2, '2020-09-03 16:57:33', '2020-09-03 16:57:33', 1),
(3, '2020-09-03 17:04:35', '2020-09-03 17:04:35', 1),
(4, '2020-09-03 17:08:20', '2020-09-03 17:08:20', 1),
(5, '2020-09-03 17:10:00', '2020-09-03 17:10:00', 1),
(6, '2020-09-03 17:11:54', '2020-09-03 17:11:54', 1),
(7, '2020-09-03 17:12:16', '2020-09-03 17:12:16', 1),
(8, '2020-09-03 17:12:40', '2020-09-03 17:12:40', 1),
(9, '2020-09-03 17:13:28', '2020-09-03 17:13:28', 1),
(10, '2020-09-03 17:15:02', '2020-09-03 17:15:02', 1),
(11, '2020-09-03 17:15:18', '2020-09-03 17:15:18', 1),
(12, '2020-09-03 17:18:01', '2020-09-03 17:18:01', 1),
(13, '2020-09-03 17:18:42', '2020-09-03 17:18:42', 1),
(14, '2020-09-03 17:19:23', '2020-09-03 17:19:23', 1),
(15, '2020-09-03 17:19:56', '2020-09-03 17:19:56', 1),
(16, '2020-09-03 17:20:46', '2020-09-03 17:20:46', 1),
(17, '2020-09-03 17:21:27', '2020-09-03 17:21:27', 1),
(18, '2020-09-03 17:22:09', '2020-09-03 17:22:09', 1),
(19, '2020-09-03 17:24:14', '2020-09-03 17:24:14', 1),
(20, '2020-09-03 17:24:22', '2020-09-03 17:24:22', 1);

-- --------------------------------------------------------

--
-- Table structure for table `orderitems`
--

CREATE TABLE `orderitems` (
  `id` int(11) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `orderId` int(11) DEFAULT NULL,
  `productId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orderitems`
--

INSERT INTO `orderitems` (`id`, `quantity`, `createdAt`, `updatedAt`, `orderId`, `productId`) VALUES
(1, 1, '2020-09-03 17:24:30', '2020-09-03 17:24:30', 1, 1),
(2, 3, '2020-09-03 17:24:30', '2020-09-03 17:24:30', 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `createdAt`, `updatedAt`, `userId`) VALUES
(1, '2020-09-03 17:24:30', '2020-09-03 17:24:30', 1);

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
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `price`, `imageURL`, `description`, `createdAt`, `updatedAt`, `userId`) VALUES
(1, 'Beautiful Girl', 6, 'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-0/s600x600/118470735_1580424605470026_8327284237735585658_o.jpg?_nc_cat=111&_nc_sid=b9115d&_nc_ohc=2Agj5M2meTEAX8ZOtaj&_nc_ht=scontent.fsgn5-3.fna&tp=7&oh=dbf617b0f25d7f8a93e8b1cc9c74b884&oe=5F7432E8', '', '2020-09-03 17:05:22', '2020-09-03 17:05:22', 1),
(2, 'food', 52, 'https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-0/p526x296/118543315_192049228956784_5375390227836881765_o.jpg?_nc_cat=109&_nc_sid=825194&_nc_ohc=ib2Xt7hFkngAX9muTtW&_nc_ht=scontent.fsgn5-6.fna&tp=6&oh=67556b2fcf650c5bed2de06cfe85cbb2&oe=5F73BEEF', '', '2020-09-03 17:06:52', '2020-09-03 17:06:52', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `createdAt`, `updatedAt`) VALUES
(1, 'Minh Tin', 'minhtin@gmail.com', '2020-09-03 16:57:24', '2020-09-03 16:57:24');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cartitems`
--
ALTER TABLE `cartitems`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cartItems_productId_cartId_unique` (`cartId`,`productId`),
  ADD KEY `productId` (`productId`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `orderitems`
--
ALTER TABLE `orderitems`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `orderItems_orderId_productId_unique` (`orderId`,`productId`),
  ADD KEY `productId` (`productId`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cartitems`
--
ALTER TABLE `cartitems`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `orderitems`
--
ALTER TABLE `orderitems`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cartitems`
--
ALTER TABLE `cartitems`
  ADD CONSTRAINT `cartitems_ibfk_1` FOREIGN KEY (`cartId`) REFERENCES `carts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cartitems_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `orderitems`
--
ALTER TABLE `orderitems`
  ADD CONSTRAINT `orderitems_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orderitems_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
