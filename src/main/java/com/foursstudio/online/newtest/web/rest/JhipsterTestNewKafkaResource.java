package com.foursstudio.online.newtest.web.rest;

import com.foursstudio.online.newtest.service.JhipsterTestNewKafkaProducer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/jhipster-test-new-kafka")
public class JhipsterTestNewKafkaResource {

    private final Logger log = LoggerFactory.getLogger(JhipsterTestNewKafkaResource.class);

    private JhipsterTestNewKafkaProducer kafkaProducer;

    public JhipsterTestNewKafkaResource(JhipsterTestNewKafkaProducer kafkaProducer) {
        this.kafkaProducer = kafkaProducer;
    }

    @PostMapping("/publish")
    public void sendMessageToKafkaTopic(@RequestParam("message") String message) {
        log.debug("REST request to send to Kafka topic the message : {}", message);
        this.kafkaProducer.send(message);
    }
}
