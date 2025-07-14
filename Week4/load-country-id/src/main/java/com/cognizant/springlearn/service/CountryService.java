package com.cognizant.springlearn.service;

import com.cognizant.springlearn.model.Country;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;
import javax.xml.parsers.DocumentBuilderFactory;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import org.w3c.dom.*;

@Service
public class CountryService {

    private List<Country> countryList = new ArrayList<>();

    @PostConstruct
    public void loadCountries() {
        try {
            InputStream is = getClass().getClassLoader().getResourceAsStream("country.xml");
            Document doc = DocumentBuilderFactory.newInstance().newDocumentBuilder().parse(is);
            doc.getDocumentElement().normalize();

            NodeList nodeList = doc.getElementsByTagName("country");
            for (int i = 0; i < nodeList.getLength(); i++) {
                Element el = (Element) nodeList.item(i);
                String code = el.getElementsByTagName("code").item(0).getTextContent();
                String name = el.getElementsByTagName("name").item(0).getTextContent();
                countryList.add(new Country(code, name));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public Country getCountry(String code) {
        return countryList.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElse(null);
    }
}
