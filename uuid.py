import uuid

def generate_session_id():
  return str(uuid.uuid4())

session_id = generate_session_id()
