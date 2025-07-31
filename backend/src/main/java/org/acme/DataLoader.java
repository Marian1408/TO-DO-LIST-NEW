package org.acme;

import io.quarkus.runtime.StartupEvent;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.event.Observes;
import jakarta.transaction.Transactional;

import org.acme.models.Todo;

@ApplicationScoped
public class DataLoader {

    @Transactional
    void onStart(@Observes StartupEvent ev) {
        // Verificar si ya existen datos para no duplicar
        if (Todo.count() == 0) {
            // Crear primer registro
            Todo registro1 = new Todo();
            registro1.setTitle("Aprender Quarkus");
            registro1.setDescription("Prueba de Quarkus");
            registro1.setCompleted(true);
            registro1.persist();

            // Crear segundo registro
            Todo registro2 = new Todo();
            registro2.setTitle("Lectura");
            registro2.setDescription("Leer un capitulo de un libro");
            registro2.setCompleted(false);
            registro2.persist();

            // Crear tercer registro
            Todo registro3 = new Todo();
            registro3.setTitle("Ejercicio");
            registro3.setDescription("Hacer Ejercicio 1 hora");
            registro3.setCompleted(false);
            registro3.persist();

            // Crear cuarto registro
            Todo registro4 = new Todo();
            registro4.setTitle("Ingles");
            registro4.setDescription("Aprender ingles 1 hora");
            registro4.setCompleted(false);
            registro4.persist();
        }
    }
}