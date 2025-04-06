// components/RegistrationForm.js
"use client"
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../lib/firebaseConfig';

const RegistrationForm = ({ minPartic, maxPartic }) => {
  const [user, loading] = useAuthState(auth);
  const [members, setMembers] = useState([]);
  const [formData, setFormData] = useState(Array(minPartic).fill({ name: '', email: '', phoneNumber: '', degree: '' }));



  const from=(a,b) => {
    const fields = [];
    for (let i = 0; i < b; i++) {
      fields.push(
        <div className="relative" key={i}>
            hey
        </div>
      );
    }
    return fields;
  }

  const generateGreetings = (a,b) => {
    const greetings = [];

    // Generate "b" number of Hello's with blue background
    for (let i = 0; i < b; i++) {
      greetings.push(
        <div key={`blue${i}`} className="bg-blue-500 p-2 mb-2 text-white">
          Hello
        </div>
      );
    }

    // Generate "a" number of Hello's with red background
    for (let i = 0; i < a; i++) {
      greetings.push(
        <div key={`red${i}`} className="bg-red-500 p-2 mb-2 text-white">
          Hello
        </div>
      );
    }

    return greetings;
  };


  useEffect(() => {
    if (user) {
      const unsubscribe = firestore
        .collection('user')
        .doc(user.uid)
        .collection('members')
        .onSnapshot((snapshot) => {
          const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setMembers(data);
        });

      return () => unsubscribe();
    }
  }, [user]);

  const addMember = () => {
    if (members.length < upperLimit) {
      firestore.collection('users')
        .doc(user.uid)
        .collection('members')
        .add({
          name: '',
          email: '',
          phoneNumber: '',
          degree: '',
        });
    }
  };

  const removeMember = (id) => {
    firestore.collection('users')
      .doc(user.uid)
      .collection('members')
      .doc(id)
      .delete();
  };

  const handleChange = (id, field, value) => {
    firestore.collection('users')
      .doc(user.uid)
      .collection('members')
      .doc(id)
      .update({
        [field]: value,
      });
  };

  const handleSubmit = () => {
    // Implement your registration logic here, using members array
    console.log('Submitted:', members);
  };

  if (loading) {
    return <p>Loading...</p>; // You might want to show a loading indicator while checking authentication status
  }

  return (
    <div className="container mx-auto p-4 relative">
      <h1 className="text-2xl font-bold mb-4">Registration Form</h1>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        {/* Render fields for each participant */}


        {/* Submit Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            disabled={formData.slice(0, minPartic).some((participant) => !participant.name || !participant.email || !participant.phoneNumber || !participant.degree)}
          >
            Register
          </button>
        </div>
      </form>
      <div className='relative'>
      {generateGreetings(3,6)}
      </div>
      <div>{from(3,4)}</div>
      <div> hello</div>
    </div>
  );
  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded">
      <form onSubmit={(e) => e.preventDefault()}>
        {members.map((member) => (
          <div key={member.id} className="mb-4">
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-600">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded"
                placeholder="Name"
                value={member.name}
                onChange={(e) => handleChange(member.id, 'name', e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded"
                placeholder="Email"
                value={member.email}
                onChange={(e) => handleChange(member.id, 'email', e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-600">Phone Number</label>
              <input
                type="tel"
                className="w-full px-3 py-2 border rounded"
                placeholder="Phone Number"
                value={member.phoneNumber}
                onChange={(e) => handleChange(member.id, 'phoneNumber', e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-600">Degree</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded"
                placeholder="Degree"
                value={member.degree}
                onChange={(e) => handleChange(member.id, 'degree', e.target.value)}
              />
            </div>
            {members.length > lowerLimit && (
              <button
                type="button"
                onClick={() => removeMember(member.id)}
                className="text-red-500"
              >
                Remove Member
              </button>
            )}
          </div>
        ))}
        {members.length < upperLimit && (
          <button type="button" onClick={addMember} className="mb-4">
            Add Member
          </button>
        )}
        <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  
  );
};

export default RegistrationForm;
