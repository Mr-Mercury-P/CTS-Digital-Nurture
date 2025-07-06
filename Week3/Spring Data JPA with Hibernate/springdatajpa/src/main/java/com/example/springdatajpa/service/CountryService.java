package com.example.springdatajpa.service;

import com.example.springdatajpa.model.Country;
import com.example.springdatajpa.repository.CountryRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    @Transactional
    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

    @Transactional
    public void addCountry(Country country) {
        countryRepository.save(country);
    }
}
