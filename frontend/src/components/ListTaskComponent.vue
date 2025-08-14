<script setup lang="ts">
import TaskComponent from '@/components/TaskComponent.vue'


</script>

<template>
   <div class="px-40 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div class="flex flex-wrap justify-between gap-3 p-4"><p class="text-[#0e1a13] tracking-light text-[32px] font-bold leading-tight min-w-72">My Tasks</p></div>
            <task-component>
              Compar Agua
            </task-component>
            <task-component>
              Comprar alimento 
            </task-component>
            <task-component>
              Frutas y verduras
            </task-component>
            <task-component>
              HACER LA COMIDA 
            </task-component>
            <task-component>
              Ir a la lavanderia
            </task-component>
            <task-component>
              Ir al gimnasio
            </task-component>
            <task-component>
              Ir a la tienda
            </task-component>
            <task-component>
              Ir a la tienda de mascotas
            </task-component>

          </div>
        </div>
</template>

<style scoped>
</style>
