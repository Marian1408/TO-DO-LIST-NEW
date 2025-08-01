package org.acme;

import io.quarkus.runtime.StartupEvent;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.event.Observes;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;

import org.acme.models.Todo;
import org.jboss.logging.Logger;

@ApplicationScoped
public class DataLoader {

    @Inject
    Logger logger;

    @Transactional
    void onStart(@Observes StartupEvent ev) {
        try {
            if (Todo.count() == 0) {
                Todo registro1 = new Todo();
                registro1.setTitle("Aprender Quarkus");
                registro1.setDescription("Prueba de Quarkus");
                registro1.setCompleted(true);
                registro1.persist();

                Todo registro2 = new Todo();
                registro2.setTitle("Lectura");
                registro2.setDescription("Leer un capitulo de un libro");
                registro2.setCompleted(false);
                registro2.persist();

                Todo registro3 = new Todo();
                registro3.setTitle("Ejercicio");
                registro3.setDescription("Hacer Ejercicio 1 hora");
                registro3.setCompleted(false);
                registro3.persist();

                Todo registro4 = new Todo();
                registro4.setTitle("Ingles");
                registro4.setDescription("Aprender ingles 1 hora");
                registro4.setCompleted(false);
                registro4.persist();

                logger.info("Datos iniciales cargados exitosamente.");
            } else {
                logger.info("No se cargaron datos iniciales porque ya existen registros en la base de datos.");
            }
        } catch (Exception e) {
            logger.error("Error al cargar datos iniciales: " + e.getMessage(), e);
        }
    }
}
