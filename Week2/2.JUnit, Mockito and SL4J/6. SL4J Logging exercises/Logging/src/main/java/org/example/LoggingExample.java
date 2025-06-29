package org.example;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {
    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {
        logMessages();
    }

    private static void logMessages() {
        int x = 5;

        logger.trace("Trace: entered method logMessages");
        logger.debug("Debug: variable x = {}", x);
        logger.info("Info: application started");
        logger.warn("Warning: disk space low");
        logger.error("Error: unable to connect to database");
    }
}
