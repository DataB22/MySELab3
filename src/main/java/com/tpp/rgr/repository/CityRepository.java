package com.tpp.rgr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tpp.rgr.models.City;

@Repository
public interface CityRepository extends JpaRepository<City, Integer> {
}
