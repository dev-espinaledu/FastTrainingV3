import { useState } from 'react';

const ClosedFolderIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 7h9.75c2.107 0 3.16 0 3.917.506a3 3 0 0 1 .827.827C22 9.09 22 10.143 22 12.25c0 3.511 0 5.267-.843 6.528a5 5 0 0 1-1.38 1.38C18.518 21 16.762 21 13.25 21H12c-4.714 0-7.071 0-8.536-1.465C2 18.072 2 15.715 2 11V7.944c0-1.816 0-2.724.38-3.406A3 3 0 0 1 3.538 3.38C4.22 3 5.128 3 6.944 3C8.108 3 8.69 3 9.2 3.191c1.163.436 1.643 1.493 2.168 2.542L12 7" color="#000000"></path></svg>
    )
  };

const OpenFolderIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} color="#000000"><path d="M11.57 21h-1.063c-4.01 0-6.015 0-7.261-1.546S2 15.42 2 10.444V7.22c0-1.917 0-2.876.324-3.595a2.94 2.94 0 0 1 .984-1.223C3.888 2 4.661 2 6.206 2c.99 0 1.485 0 1.918.202c.99.46 1.398 1.575 1.844 2.683l.539 1.337m-3.503 0h8.545c1.792 0 2.688 0 3.332.534c.278.23.518.528.704.874c.29.538.384 1.219.415 2.287"></path><path d="M4.596 12.576c.43-1.15.647-1.724 1.067-2.085c.68-.582 1.657-.485 2.494-.485h9.095c2.477 0 3.716 0 4.334.797c1.06 1.368-.191 3.587-.695 4.93c-.904 2.408-1.356 3.612-2.256 4.346c-1.371 1.119-3.366.904-5.021.904H9.937c-3.543 0-5.314 0-6.236-1.096c-1.7-2.025.13-5.274.895-7.312"></path></g></svg>
    )
  };

const fileSystem = [
    {
      name: '2023',
      type: 'folder',
      children: [
        {
          name: 'Enero',
          type: 'folder',
          children: [
            { 
                name: 'Leo Messi',
                type: 'folder',
                children: [
                    { name: 'mesociclo.pdf', type: 'file' },
                    { name: 'stats.pdf', type: 'file' }
                ]
            },
            { 
                name: 'Andrés Escobar',
                type: 'folder',
                children: [
                    { name: 'mesociclo.pdf', type: 'file' },
                    { name: 'stats.pdf', type: 'file' }
                ]
            },
            { 
                name: 'Mario Bros',
                type: 'folder',
                children: [
                    { name: 'mesociclo.pdf', type: 'file' },
                    { name: 'stats.pdf', type: 'file' }
                ]
            },
            { 
                name: 'Yeison Jiménez',
                type: 'folder',
                children: [
                    { name: 'mesociclo.pdf', type: 'file' },
                    { name: 'stats.pdf', type: 'file' }
                ]
            },
            { 
                name: 'Manuel Daza',
                type: 'folder',
                children: [
                    { name: 'mesociclo.pdf', type: 'file' },
                    { name: 'stats.pdf', type: 'file' }
                ]
            },
            { 
                name: 'Robert Lewandowski',
                type: 'folder',
                children: [
                    { name: 'mesociclo.pdf', type: 'file' },
                    { name: 'stats.pdf', type: 'file' }
                ]
            },
            { 
                name: 'Gianluigi Donnarumma',
                type: 'folder',
                children: [
                    { name: 'mesociclo.pdf', type: 'file' },
                    { name: 'stats.pdf', type: 'file' }
                ]
            },
            { 
                name: 'Thiago Alcántara',
                type: 'folder',
                children: [
                    { name: 'mesociclo.pdf', type: 'file' },
                    { name: 'stats.pdf', type: 'file' }
                ]
            },
            { 
                name: 'Joshua Kimmich',
                type: 'folder',
                children: [
                    { name: 'mesociclo.pdf', type: 'file' },
                    { name: 'stats.pdf', type: 'file' }
                ]
            },
            { 
                name: 'Romelu Lukaku',
                type: 'folder',
                children: [
                    { name: 'mesociclo.pdf', type: 'file' },
                    { name: 'stats.pdf', type: 'file' }
                ]
            },
            { 
                name: 'Antoine Griezmann',
                type: 'folder',
                children: [
                    { name: 'mesociclo.pdf', type: 'file' },
                    { name: 'stats.pdf', type: 'file' }
                ]
            },
          ],
        },
        {
          name: 'Abril',
          type: 'folder',
          children: [
            { name: 'Archivo3.txt', type: 'file' },
          ],
        },
      ],
    },
    {
      name: '2024',
      type: 'folder',
      children: [
        { name: 'Archivo4.txt', type: 'file' },
        { name: 'Archivo5.txt', type: 'file' },
      ],
    },
];
  
  // Componente que renderiza cada archivo o carpeta
  const FileNode = ({ node }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    // Si es un archivo, simplemente lo renderizamos
    if (node.type === 'file') {
      return <div className="ml-2 text-gray-600">📄 {node.name}</div>;
    }
  
    // Si es una carpeta, podemos expandirla o contraerla
    return (
      <div className="ml-2">
        <div
          className="cursor-pointer font-bold flex gap-1 items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <OpenFolderIcon/> : <ClosedFolderIcon /> } {node.name}
        </div>
  
        {/* Renderizar los hijos si la carpeta está abierta */}
        {isOpen && (
          <div className="ml-4 flex flex-col gap-2 items-start">
            {node.children.map((child, index) => (
              <FileNode key={index} node={child} />
            ))}
          </div>
        )}
      </div>
    );
  };


const ArchivosTrainer = () => {
  return (
      <div className='flex flex-col gap-2 overflow-y-scroll h-full w-1/4 p-4'>
        <h3 className='text-xl font-font'>Archivos de tu equipo</h3>
        {fileSystem.map((node, index) => (
          <FileNode key={index} node={node} />
        ))}
      </div>
  );
};

const ArchivosJugador = () => {
  return (
      <div className='flex flex-col gap-2 overflow-y-scroll h-full w-1/4 p-4'>
        <h3 className='text-xl font-font'>Archivos de tu equipo</h3>
        {fileSystem.map((node, index) => (
          <FileNode key={index} node={node} />
        ))}
      </div>
  );
};

export {ArchivosJugador, ArchivosTrainer } ;