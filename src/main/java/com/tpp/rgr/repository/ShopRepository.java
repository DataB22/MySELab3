package com.tpp.rgr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tpp.rgr.models.Shop;


@Repository
public interface ShopRepository extends JpaRepository<Shop, Integer> {

}
