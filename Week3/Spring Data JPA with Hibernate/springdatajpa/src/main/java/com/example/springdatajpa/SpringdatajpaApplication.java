package com.example.springdatajpa;

import com.example.springdatajpa.model.Country;
import com.example.springdatajpa.service.CountryService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class SpringdatajpaApplication {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(SpringdatajpaApplication.class, args);
		CountryService countryService = context.getBean(CountryService.class);

		Country country = new Country();
		country.setCode("IN");
		country.setName("India");
		countryService.addCountry(country);

		countryService.getAllCountries().forEach(System.out::println);
	}
}
