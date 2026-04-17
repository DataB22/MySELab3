package com.tpp.rgr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tpp.rgr.models.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

}
