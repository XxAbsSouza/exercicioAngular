import { TarefaService } from './../../services/tarefa-service.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Tarefa } from '../../interfaces/Tarefa';



@Component({
  selector: 'app-tarefas-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tarefas-component.component.html',
  styleUrl: './tarefas-component.component.css'
})
export class TarefasComponent {
  tarefas:Tarefa[] = [];
    tarefaForm: FormGroup = new FormGroup({})

   constructor(private TarefaService:TarefaService, private formBuilder: FormBuilder) {
      this.tarefaForm = this.formBuilder.group({
        titulo: ['', Validators.required],
        descricao: ['', Validators.required],
        dataVencimento: ['', Validators.required]
      })
  }

  generateRandomString(length: number): string  {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ''
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  inserir(){
     if(this.tarefaForm.valid) {
        const clientNovo: Tarefa = {
          titulo: this.tarefaForm.value.titulo,
          descricao: this.tarefaForm.value.descricao,
          dataVencimento: this.tarefaForm.value.dataVencimento,
          id : this.generateRandomString(6)
        }
        this.tarefaForm.reset()
        this.TarefaService.adicionar(clientNovo)
        alert('Cadastrado com sucesso!')
     }
  }

  listar():void{
      this.tarefas = this.TarefaService.listar();
  }

  remover(id:string):void{
    this.TarefaService.remover(id);
    alert('Removido com sucesso!')
  }

  ngOnInit():void{
    this.listar();
  }
}
