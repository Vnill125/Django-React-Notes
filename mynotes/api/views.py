from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Notes
from .serializer import NotesSerializer
# Create your views here.

@api_view(['GET'])
def getRoutes(request):

    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]
    return Response(routes)

@api_view(['GET'])
def getNotes(request):
    if request.method == 'GET':
        notes = Notes.objects.all().order_by('-updated')
        serializer = NotesSerializer(notes, many=True)
        return Response(serializer.data)

@api_view(['GET', 'POST'])
def getNote(request, pk):
    if request.method == 'GET':
        notes = Notes.objects.get(id=pk)
        serializer = NotesSerializer(notes, many=False)
        return Response(serializer.data)

@api_view(['POST'])
def createNote(request):
    note = Notes.objects.create(
        body = request.data['body']
        )
    serializer = NotesSerializer(note, many=False)
    return Response(serializer.data)
    
    
@api_view(['PUT'])    
def updateNote(request, pk):
    data = request.data
    note = Notes.objects.get(id = pk)
    serializer = NotesSerializer(instance=note, data=data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])    
def deleteNote(request, pk):
    note = Notes.objects.get(id=pk)
    note.delete()
    return Response('Note was deleted!')
