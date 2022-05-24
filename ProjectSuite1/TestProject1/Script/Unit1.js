function teste(){
  //Sys.Process("notepad").Window("Notepad", "Sem título - Bloco de Notas", 1).Window("Edit", "", 1).wText = "Teste TestComplete"
  NameMapping.Sys.ProcessoNotepad.MainWindowNotepad.EditNotepad.wText= "TesteComplete with NameMapping 1"
}
